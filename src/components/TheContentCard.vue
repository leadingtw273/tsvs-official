<template>
  <div class="the-content-card d-flex flex-row mx-12 mb-12">
    <v-sheet color="primary" class="side-bar px-8 py-12" dark>
      <span class="d-flex headline mb-2 ml-4">{{ menuTitle }}</span>

      <v-btn-toggle class="d-flex flex-column" v-model="menuIndex" color="active" mandatory group>
        <template v-for="({ text, items, link, show = true }, i) in menuList">
          <v-divider class="item-divider ml-4" :key="text + '_divider'" v-if="show && i !== 0"></v-divider>
          <v-btn :to="link" class="main-menu justify-start subtitle-1" :key="text" v-if="show">
            {{ text }}
          </v-btn>
          <v-btn-toggle
            class="d-flex flex-column"
            v-model="subMenuIndex"
            v-if="menuIndex === i && subMenuList.length !== 0"
            color="active"
            :key="text + '_subGroup'"
            mandatory
            group
          >
            <v-btn
              class="sub-menu justify-start"
              v-for="{ text: subText, link: subLink } in subMenuList"
              :to="subLink"
              :key="subText"
            >
              {{ subText }}
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-btn-toggle>
    </v-sheet>
    <v-sheet color="secondary" class="content py-12 px-8">
      <div class="d-flex flex-row mb-6">
        <div>
          <v-divider class="mx-6" color="black" vertical></v-divider>
          <span class="headline">{{ menuList[menuIndex].text }}</span>
        </div>
        <div v-if="subMenuList[subMenuIndex] != null">
          <v-divider class="mx-6" color="black" vertical></v-divider>
          <span class="headline">{{ subMenuList[subMenuIndex].text }}</span>
        </div>
      </div>
      <slot>
        <div class="my-12 px-12">
          N/A
        </div>
      </slot>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "TheContentCard",
  props: {
    menuTitle: {
      type: String,
      default: "學會資訊"
    },
    menuList: {
      type: Array,
      default() {
        return [
          { id: "0", text: "聯絡資訊" },
          { id: "1", text: "帳號資訊" },
          { id: "2", text: "學會簡介" },
          { id: "3", text: "主要任務" },
          {
            id: "4",
            text: "章程法令規章",
            items: [
              { id: "0", text: "學會章程" },
              { id: "1", text: "規章" },
              { id: "2", text: "法令" }
            ]
          },
          { id: "5", text: "組織名單" },
          { id: "6", text: "會議記錄" }
        ];
      }
    }
  },
  data() {
    return {
      menuIndex: 0,
      subMenuIndex: 0
    };
  },
  computed: {
    subMenuList() {
      if (!Object.prototype.hasOwnProperty.call(this.menuList[this.menuIndex], "items")) return [];
      return this.menuList[this.menuIndex].items;
    }
  },
  mounted() {
    const path = this.$route.path;
    const [, , menuText, subMenuText] = path.split("/");

    const menuFindIndex = this.menuList.findIndex(({ text }) => text === menuText);
    this.menuIndex = menuFindIndex === -1 ? 0 : menuFindIndex;

    const subMenuFindIndex = this.subMenuList.findIndex(({ text }) => text === subMenuText);
    this.subMenuIndex = subMenuFindIndex === -1 ? 0 : subMenuFindIndex;
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

    .main-menu {
      height: 46px !important;
    }

    .sub-menu {
      height: 30px !important;
    }

    .v-btn:before {
      background-color: transparent !important;
    }
  }

  .content {
    border-radius: 0 40px 40px 0;
    width: 80%;
  }
}
</style>
