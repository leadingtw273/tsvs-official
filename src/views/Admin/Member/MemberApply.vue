<template>
  <div>
    <dialog-form
      okLabel="審核通過"
      title="審核"
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
          mdi-eye
        </v-icon>
        <!-- <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon> -->
      </template>

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>會員審核</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:top> </template>
    </v-data-table>
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
        { text: "操作", value: "actions", sortable: false }
      ],
      pageOptions: {},
      formData: {},
      formSchema: [
        {
          name: "基本資料",
          items: [
            { name: "username", label: "帳號", col: 12, readonly: true },
            { name: "name_zh", label: "中文姓名/單位名稱", readonly: true },
            { name: "name_en", label: "英文姓名", readonly: true },
            {
              name: "type",
              label: "身分別",
              type: "select",
              items: [
                { label: "學會之友", value: 1 },
                { label: "正式會員", value: 2 }
              ],
              readonly: true
            },
            {
              name: "class",
              label: "類別",
              type: "select",
              items: [
                { label: "個人會員", value: 1 },
                { label: "團體會員", value: 2 }
              ],
              readonly: true
            },
            {
              name: "gender",
              label: "性別",
              type: "select",
              items: [
                { label: "團體會員", value: 0 },
                { label: "男性", value: 1 },
                { label: "女性", value: 2 }
              ],
              readonly: true
            },
            { name: "birthDate", label: "出生日期", type: "date", readonly: true, mask: "####/##/##" },
            { name: "education", label: "教育程度", readonly: true },
            { name: "link", label: "個人介紹連結", readonly: true },
            { name: "cover_image", label: "個人照片/公司 Logo", type: "file", readonly: true },
            { name: "diplomacy_image", label: "畢業證書/設立證明", type: "file", readonly: true }
          ]
        },
        {
          name: "聯絡資訊",
          items: [
            { name: "address_official", label: "戶籍地址/單位登記地址", readonly: true },
            { name: "adddress_contact", label: "通訊地址", readonly: true },
            { name: "phone_office", label: "公司電話", readonly: true },
            { name: "phone_mobile", label: "行動電話/聯絡人行動電話", readonly: true },
            { name: "mail", label: "電子郵件", readonly: true }
          ]
        },
        {
          name: "單位資訊",
          items: [
            { name: "org_name", label: "服務醫院名稱", readonly: true },
            { name: "org_address", label: "服務醫院地址", readonly: true },
            { name: "org_contact_person", label: "聯絡人姓名", readonly: true },
            { name: "org_department", label: "服務醫院科別", readonly: true },
            { name: "org_position", label: "現任職稱", readonly: true }
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
      user: state => state.admin.user.register
    }),
    pagination() {
      return {
        size: this.pageOptions.itemsPerPage || 10,
        page: this.pageOptions.page || 1
      };
    }
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch("admin/user/getRegisterUserList", this.pagination);
    },
    editItem(item) {
      this.isOpen = true;
      this.formData = Object.assign({}, item);
    },
    async handleSave(data, cb) {
      try {
        await this.$store.dispatch("admin/user/approval", data.id);
        this.fetchUsers();
      } catch (error) {
        console.log(error);
      }

      cb();
    }
  }
};
</script>

<style></style>
