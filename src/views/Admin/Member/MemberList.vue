<template>
  <div>
    <v-data-table
      dark
      :headers="headers"
      :items="user.data"
      class="elevation-1"
      :loading="user.loading"
      :footer-props="footerProps"
      :options.sync="pageOptions"
      :server-items-length="user.total"
      @update:options="fetchUsers"
    >
      <template v-slot:item.pass="{}">
        <v-btn color="success" class="ma-1" small>通過</v-btn>
        <v-btn color="warning" class="ma-1" small>待補件</v-btn>
        <v-btn color="accent" class="ma-1" small>拒絕</v-btn>
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
                v-else-if="typeof editedItem[key] === 'number' && key !== 'type'"
                v-model.number="editedItem[key]"
                :label="schema[key]"
              />

              <v-select
                v-model.number="editedItem[key]"
                :items="[
                  { text: '正式會員', value: 2 },
                  { text: '學會之友', value: 1 }
                ]"
                label="身分別"
              ></v-select>
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

    <!-- <v-dialog v-model="rejectDialog" width="500">
      <v-card dark>
        <v-card-title class="headline primary">
          確認刪除理由
        </v-card-title>

        <v-card-text class="d-flex flex-column align-center ">
          <v-textarea label="理由" width=></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MemberTable",
  data() {
    return {
      rejectDialog: true,
      loading: true,
      dialog: false,
      footerProps: {
        "items-per-page-options": [1, 5, 10, 30]
      },
      headers: [
        { text: "編號", value: "id" },
        { text: "姓名", value: "name_zh" },
        { text: "身分證", value: "username" },
        { text: "電子信箱", value: "mail" },
        { text: "手機號碼", value: "phone_mobile" },
        { text: "任職醫院", value: "org_name" },
        { text: "科別", value: "org_department" },
        { text: "執行", value: "actions", sortable: false },
        { text: "狀態", value: "pass", sortable: false }
      ],
      pageOptions: {},
      schema: {
        username: "帳號",
        name_zh: "中文姓名/單位名稱",
        name_en: "英文姓名",
        mail: "電子信箱",
        gender: "性別",
        class: "會員類別",
        link: "介紹連結",
        adddress_contact: "通訊地址",
        address_official: "戶籍地址",
        applyDate: "申請日期",
        birthDate: "生日",
        cover_image: "個人照片/Logo",
        diplomacy_image: "證明文件",
        education: "學歷",
        org_name: "醫院名稱",
        org_address: "醫院地址",
        org_contact_person: "醫院連絡人",
        org_department: "醫院科別",
        org_position: "現任職務",
        phone_mobile: "行動電話",
        phone_office: "公司電話",
        role: "權限",
        type: "身分別"
      },
      items: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {
        username: "",
        name_zh: "",
        name_en: "",
        mail: "",
        gender: 0,
        class: 1,
        link: "",
        adddress_contact: "",
        address_official: "",
        applyDate: "",
        birthDate: "",
        cover_image: "",
        diplomacy_image: "",
        education: "",
        org_name: "",
        org_address: "",
        org_contact_person: "",
        org_department: "",
        org_position: "",
        phone_mobile: "",
        phone_office: "",
        role: 999,
        type: 1
      }
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    ...mapState({
      user: state => state.admin.user.user
    }),
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
