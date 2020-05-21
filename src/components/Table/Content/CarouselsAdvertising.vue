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
          <v-toolbar-title>首頁廣告列表</v-toolbar-title>
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
              <v-col cols="12" v-if="editedItem.image !== ''">
                <v-img class="ma-auto" :src="editedItem.image" width="70%" aspect-ratio="1.7"></v-img>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.image" label="Image Link"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.subTitle" label="Sub Title"></v-text-field>
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
  name: "CarouselsAdvertising",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Image Preview", value: "image", align: "center", sortable: false },
        { text: "Title", value: "title" },
        { text: "Sub Title", value: "subTitle" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [
        {
          image: "https://cw1.tw/CW/images/article/C1323775766370.jpg",
          title: "台灣血管外科學會",
          subTitle: "Taiwan Society for Vascular Surgery"
        },
        {
          image: "https://www.medicaltravel.org.tw/img/section1bg1.jpg",
          title: "醫療大數據",
          subTitle: "Precision Medicine"
        },
        {
          image: "https://buzzorange.com/techorange/wp-content/uploads/sites/2/2019/04/doctor-1024x681.webp?jpeg",
          title: "人工智慧的醫療照護應用",
          subTitle: "小病就跑大醫院？減少醫療浪費"
        }
      ],
      editedIndex: -1,
      editedItem: {
        image: "",
        title: "",
        subTitle: ""
      },
      defaultItem: {
        image: "",
        title: "",
        subTitle: ""
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
      confirm("確定刪除這廣告？") && this.items.splice(index, 1);
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
