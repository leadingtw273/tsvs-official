<template>
  <div>
    <dialog-form
      title="會員資料"
      type="tab"
      :isOpen.sync="isOpen"
      :items="formSchema"
      :data="formData"
      v-on:save="handleSave"
    />

    <v-data-table
      :headers="headers"
      :items="user.data"
      class="elevation-1"
      :loading="user.loading"
      :footer-props="footerProps"
      :options.sync="pageOptions"
      :server-items-length="user.total"
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

    <!-- <v-dialog v-model="dialog" max-width="900px">
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
    </v-dialog> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import DialogForm from "../../../components/DialogForm/Form";

export default {
  name: "MemberTable",
  components: { DialogForm },
  data() {
    return {
      isOpen: false,
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
        { text: "執行", value: "actions", sortable: false }
      ],
      pageOptions: {},
      formData: {},
      formSchema: [
        {
          name: "基本資料",
          items: [
            { name: "username", label: "帳號", col: 12, readonly: true },
            { name: "name_zh", label: "中文姓名/單位名稱" },
            { name: "name_en", label: "英文姓名" },
            {
              name: "type",
              label: "身分別",
              type: "select",
              items: [
                { label: "學會之友", value: 1 },
                { label: "正式會員", value: 2 }
              ]
            },
            {
              name: "class",
              label: "類別",
              type: "select",
              items: [
                { label: "個人會員", value: 1 },
                { label: "團體會員", value: 2 }
              ]
            },
            {
              name: "gender",
              label: "性別",
              type: "select",
              items: [
                { label: "團體會員", value: 0 },
                { label: "男性", value: 1 },
                { label: "女性", value: 2 }
              ]
            },
            {
              name: "role",
              label: "身分組",
              type: "select",
              items: [
                { label: "系統管理員", value: 0 },
                { label: "學會管理員", value: 1 },
                { label: "一般會員", value: 999 }
              ]
            },
            { name: "birthDate", label: "出生日期", type: "date", mask: "####/##/##" },
            { name: "applyDate", label: "申請日期", type: "date", mask: "####/##/##", readonly: true },
            { name: "education", label: "教育程度" },
            { name: "link", label: "個人介紹連結" },
            { name: "cover_image", label: "個人照片/公司 Logo", type: "file" },
            { name: "diplomacy_image", label: "畢業證書/設立證明", type: "file" }
          ]
        },
        {
          name: "聯絡資訊",
          items: [
            { name: "address_official", label: "戶籍地址/單位登記地址" },
            { name: "adddress_contact", label: "通訊地址" },
            { name: "phone_office", label: "公司電話" },
            { name: "phone_mobile", label: "行動電話/聯絡人行動電話" },
            { name: "mail", label: "電子郵件" }
          ]
        },
        {
          name: "單位資訊",
          items: [
            { name: "org_name", label: "服務醫院名稱" },
            { name: "org_address", label: "服務醫院地址" },
            { name: "org_contact_person", label: "聯絡人姓名" },
            { name: "org_department", label: "服務醫院科別" },
            { name: "org_position", label: "現任職稱" }
          ]
        }
      ],
      items: []
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
  methods: {
    fetchUsers() {
      this.$store.dispatch("admin/user/getUserList", this.pagination);
    },
    editItem(item) {
      this.isOpen = true;
      this.formData = Object.assign({}, item);
    },
    async deleteItem(item) {
      confirm("確定刪除這筆資料？") && (await this.$store.dispatch("admin/user/deleteUser", item.id));
      this.fetchUsers();
    },
    async handleSave(data, cb) {
      console.log(data);
      try {
        await this.$store.dispatch("admin/user/updateUser", data);
        this.fetchUsers();
      } catch (error) {
        console.log(error);
      }

      cb();
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
