<template>
  <div>
    <v-data-table
      dark
      :headers="headers"
      :items="dataList"
      class="elevation-1"
      :footer-props="footerProps"
      :options.sync="pageOptions"
      @update:options="fetchUsers"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>使用者列表</v-toolbar-title>
          <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
          <!-- <v-spacer></v-spacer> -->
          <!-- <v-btn color="primary" @click.stop="dialog = true" large>新增</v-btn> -->
        </v-toolbar>
      </template>

      <template v-slot:top> </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="900px" dark>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>

        <v-card-text class="black--text">
          <v-row>
            <v-col v-for="key in Object.keys(defaultItem)" v-bind:key="key" cols="6">
              <v-text-field v-if="typeof editedItem[key] === 'string'" v-model="editedItem[key]" :label="schema[key]" />

              <v-text-field
                v-else-if="typeof editedItem[key] === 'number'"
                v-model.number="editedItem[key]"
                :label="schema[key]"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">取消</v-btn>
          <v-btn color="blue darken-1" text @click="save">更新</v-btn>
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
export default {
  name: "MemberTable",
  data() {
    return {
      rejectDialog: false,
      deleteItemId: null,
      dataList: [
        {
          id: 13,
          reason: "123", // 授予原因
          quantity: 10, // 授予積分數
          attachment: "https://i.imgur.com/TNYqUno.jpg" // 證明文件
        }
      ],
      loading: true,
      dialog: false,
      footerProps: {
        "items-per-page-options": [1, 5, 10, 30]
      },
      headers: [
        { text: "編號", value: "id" },
        { text: "授予原因", value: "reason" },
        { text: "授予積分數", value: "quantity" },
        { text: "證明文件", value: "attachment" },
        { text: "執行", value: "actions", sortable: false },
        { text: "狀態", value: "pass", sortable: false }
      ],
      pageOptions: {},
      schema: {
        reason: "授予原因",
        quantity: "授予積分數",
        attachment: "證明文件"
      },
      items: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {
        reason: "",
        quantity: 0,
        attachment: ""
      }
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新增" : "編輯";
    },
    pagination() {
      return {
        size: this.pageOptions.itemsPerPage || 10,
        page: this.pageOptions.page || 1
      };
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    deleteTestItem() {
      const deleteIndex = this.dataList.findIndex(({ id }) => id === this.deleteItemId);
      this.dataList.splice(deleteIndex, 1);
      this.rejectDialog = false;
    },
    fetchUsers() {
      this.$store.dispatch("admin/user/getUserList", this.pagination);
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    async deleteItem(item) {
      confirm("確定刪除這筆資料？") && (await this.$store.dispatch("admin/user/deleteUser", item.id));
      this.fetchUsers();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        await this.$store.dispatch("admin/user/updateUser", this.editedItem);
      }
      this.close();
      this.fetchUsers();
    }
  }
};
</script>

<style></style>
