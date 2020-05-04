<template>
  <div class="the-content-card d-flex flex-row mx-12 mb-12">
    <v-sheet color="primary" class="side-bar pl-12">
      <v-list flat class="py-12" color="transparent" dark>
        <v-subheader class="mb-2">
          <span class="white--text headline">{{ sideBarTitle }}</span>
        </v-subheader>
        <v-list-item-group color="active" v-model="item">
          <template v-for="({ id, text, subItems }, i) in items">
            <v-divider class="item-divider ml-4" :key="id" v-if="i !== 0"></v-divider>

            <v-list-item :key="id + '_text'">
              <v-list-item-content>
                <v-list-item-title v-text="text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item-group v-model="subItem" :key="id + '_subGroup'" v-if="subItems != null && item === i">
              <v-list-item dense v-for="{ id, text } in subItems" :key="id">
                <v-list-item-content>
                  <v-list-item-title v-text="text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </template>
        </v-list-item-group>
      </v-list>
    </v-sheet>
    <v-sheet color="secondary" class="content">456</v-sheet>
  </div>
</template>

<script>
export default {
  name: "TheContentCard",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      sideBarTitle: "",
      item: 0,
      subItem: 0,
      items: []
    };
  },
  methods: {
    getSideBarTitle(name) {
      switch (name) {
        case "about":
          return "學會資訊";
        case "news":
          return "學會公告";
        case "events":
          return "會議課程資訊";
        case "search":
          return "資料查詢";
        case "member":
          return "會員專區";
        case "health-education":
          return "衛教專區";
        case "websites-link":
          return "相關網站";
      }
    },
    getSideBarItems(name) {
      switch (name) {
        case "about":
          return [
            { id: "0", text: "聯絡資訊" },
            { id: "1", text: "帳號資訊" },
            { id: "2", text: "學會簡介" },
            { id: "3", text: "主要任務" },
            {
              id: "4",
              text: "章程法令規章",
              subItems: [
                { id: "0", text: "學會章程" },
                { id: "1", text: "規章" },
                { id: "2", text: "法令" }
              ]
            },
            { id: "5", text: "組織名單" },
            { id: "6", text: "會議記錄" }
          ];
        case "news":
          return [
            { id: "0", text: "秘書處公告" },
            { id: "1", text: "活動通知" },
            { id: "2", text: "醫學新知" }
          ];
        case "events":
          return [
            { id: "0", text: "申請會議課程活動" },
            { id: "1", text: "今日會議課程活動" },
            { id: "2", text: "近期會議活動課程" },
            { id: "3", text: "會議課程活動介紹" }
          ];
        case "search":
          return [
            { id: "0", text: "手術準則與參考標準" },
            { id: "1", text: "影片紀錄" },
            { id: "2", text: "訓練醫院" },
            { id: "3", text: "衛服部連結" },
            { id: "4", text: "資料下載" },
            { id: "5", text: "學術教育資源" }
          ];
        case "member":
          return [
            { id: "0", text: "會員入會" },
            { id: "1", text: "會員登入" }
          ];
        case "health-education":
          return [
            { id: "0", text: "尋找醫師" },
            { id: "1", text: "血管手術資訊" }
          ];
        case "websites-link":
          return [
            { id: "0", text: "合作學會機關" },
            { id: "1", text: "贊助廠商" }
          ];
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log("RouteUpdate");
    this.items = this.getSideBarItems(to.params.content);
    this.sideBarTitle = this.getSideBarTitle(to.params.content);
    next();
  },
  mounted() {
    this.items = this.getSideBarItems(this.title);
    this.sideBarTitle = this.getSideBarTitle(this.title);
  }
};
</script>

<style lang="scss" scoped>
.the-content-card {
  min-height: 500px;

  .side-bar {
    border-radius: 40px 0 0 40px;
    width: 20%;

    .item-divider {
      width: 65px;

      opacity: 0.6;
      background-color: white;
    }
  }

  .content {
    border-radius: 0 40px 40px 0;
    width: 80%;
  }
}
</style>
