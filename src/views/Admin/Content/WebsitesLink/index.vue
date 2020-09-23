<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
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
          <v-toolbar-title>相關網站列表</v-toolbar-title>
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
            <v-col cols="12" v-if="editedItem.image !== ''">
              <v-img class="ma-auto" :src="editedItem.image" width="70%" aspect-ratio="1.7"></v-img>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.image" label="圖片"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.name" label="名稱"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.class" label="類別"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.link" label="連結"></v-text-field>
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
  name: "WebsitesLink",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "圖片", value: "image" },
        { text: "名稱", value: "name" },
        { text: "類別", value: "class" },
        { text: "順位", value: "order" },
        { text: "連結", value: "link" },
        { text: "執行", value: "actions", sortable: false }
      ],
      items: [
        {
          image: "https://fbcd.co/images/products/0479bfbf54a9cdb35d8a51b824ee0fcc_resize.png",
          name: "company.inc",
          class: "醫藥設備廠商",
          order: 0,
          link: "https://hackmd.io/LZl49RtvR_ObQkWl5bwVzg?view"
        },
        {
          image: "https://i.pinimg.com/originals/7c/65/74/7c6574e2103f21ae65ff3a090a285ac4.gif",
          name: "company123.inc",
          class: "合作學會機關",
          order: 1,
          link: "https://hackmd.io/LZl49RtvR_ObQkWl5bwVzg?view"
        },
        {
          image: "https://cdn.logojoy.com/wp-content/uploads/2017/08/onlinelogomaker2@2x.png",
          name: "companyABC.inc",
          class: "合作學會機關",
          order: 0,
          link: "https://hackmd.io/LZl49RtvR_ObQkWl5bwVzg?view"
        }
      ],
      editedIndex: -1,
      editedItem: {
        image: "",
        name: "",
        class: "",
        link: ""
      },
      defaultItem: {
        image: "",
        name: "",
        class: "",
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
