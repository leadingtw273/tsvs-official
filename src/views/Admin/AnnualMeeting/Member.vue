<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
      <template v-slot:item.image="{ value }">
        <v-avatar class="d-flex ma-auto my-2" size="150px" v-if="value !== ''">
          <v-img :src="value" width="200px" aspect-ratio="1.5"></v-img>
        </v-avatar>
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
          <v-toolbar-title>人員列表</v-toolbar-title>
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
              <v-text-field v-model="editedItem.image" label="照片"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.name" label="名稱"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.class" label="類別"></v-text-field>
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
  name: "Member",
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
        { text: "照片", value: "image" },
        { text: "名稱", value: "name" },
        { text: "類別", value: "class" },
        { text: "內容", value: "content" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [
        {
          image:
            "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/62361324_465972270838986_7420289902081736704_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=0owRf1Z4kVsAX-3X9aM&_nc_ht=scontent-tpe1-1.xx&oh=9adad3b8316085b2cc5b98259fad9972&oe=5EEDC888",
          name: "XXX",
          class: "講者",
          content: ""
        },
        {
          image:
            "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/s960x960/35265689_1861099553936706_5067208540444164096_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=v7dbSn2Hj04AX_n1NDO&_nc_ht=scontent-tpe1-1.xx&_nc_tp=7&oh=e73351c9c820f19981291ebf0212c080&oe=5EEB9B4C",
          name: "XXX",
          class: "工作人員",
          content: ""
        }
      ],
      editedIndex: -1,
      editedItem: {
        image: "",
        name: "",
        class: "",
        content: ""
      },
      defaultItem: {
        image: "",
        name: "",
        class: "",
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
