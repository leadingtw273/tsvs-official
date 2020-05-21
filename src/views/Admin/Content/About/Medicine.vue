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
          <v-toolbar-title>醫學新知列表</v-toolbar-title>
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
  name: "Medicine",
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
            '<div class="醫學新知-2018-6-24-內容"><div class="醫學新知-2018-6-24-內容__8947ef70c77a469186d430d94ceed76a"> AAA病人接受EVAR出現Postimplantation syndrome對預後的影響 <br><br>檔案載點 <br><br>Prospective evaluation of postimplantation syndrome evolution on patient outcomes after endovascular aneurysm repair for abdominal aortic aneurysm <br>J Vasc Surg. 2016 May;63(5):1248-55 <br>門諾醫院 黃振銘醫師整理 </div></div>'
        },
        {
          date: "2019/09/02",
          content:
            '<div class="醫學新知-2018-4-3-內容"><div class="醫學新知-2018-4-3-內容__e352205fd5a4426ab5bf73d40a158e0f"> Hybrid Endovascular Approach for Aberrant Subclavian Arterial Aneurysm <br><br>檔案載點 <br><br>A 10-year Experience Using a Hybrid Endovascular Approach to Treat Aberrant Subclavian Arterial Aneurysms[1] <br>Mathew Wooster et al., Ann Vasc Surg 2018; 46: 60–64 <br>花蓮慈濟 鄭伊佐醫師整理 </div></div>'
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
