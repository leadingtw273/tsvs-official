<template>
  <div class="the-content-card d-flex flex-row mx-12 mb-12">
    <v-sheet color="primary" class="side-bar px-8 py-12" dark>
      <span class="d-flex headline mb-2 ml-4">{{ menuTitle }}</span>

      <v-btn-toggle class="d-flex flex-column" v-model="menuItemIndex" color="active" mandatory group>
        <template v-for="({ id, text }, i) in menuList">
          <v-divider class="item-divider ml-4" :key="id + '_divider'" v-if="i !== 0"></v-divider>
          <v-btn @click="getContent(id)" class="main-menu justify-start subtitle-1" :key="id">
            {{ text }}
          </v-btn>

          <v-btn-toggle
            class="d-flex flex-column"
            v-model="subMenuItemIndex"
            v-if="menuItemIndex === i && subMenuList.length !== 0"
            color="active"
            :key="id + '_subGroup'"
            mandatory
            group
          >
            <v-btn
              :class="['sub-menu', 'justify-start', subMenuItemIndex === i ? 'active--text' : '']"
              v-for="({ id, text }, i) in subMenuList"
              :key="id"
              @click="getContent(id)"
            >
              {{ text }}
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-btn-toggle>
    </v-sheet>
    <v-sheet color="secondary" class="content py-12 px-8">
      <div class="d-flex flex-row mb-6">
        <div>
          <v-divider class="mx-6" color="black" vertical></v-divider>
          <span class="headline">{{ menuList[menuItemIndex].text }}</span>
        </div>
        <div v-if="subMenuList[subMenuItemIndex] != null">
          <v-divider class="mx-6" color="black" vertical></v-divider>
          <span class="headline">{{ subMenuList[subMenuItemIndex].text }}</span>
        </div>
      </div>
      <v-btn-toggle
        class="d-flex flex-wrap mb-6 mx-8"
        v-model="contentItemIndex"
        v-if="contentList.length !== 0"
        color="accent"
        mandatory
        group
      >
        <v-btn v-for="{ id, text } in contentList" :key="id">
          {{ text }}
        </v-btn>
      </v-btn-toggle>
      <div class="px-12">
        <slot>
          N/A
        </slot>
      </div>
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
    },
    contentList: {
      type: Array,
      default() {
        return [
          { id: "5", text: "組織名單" },
          { id: "6", text: "會議記錄" }
        ];
      }
    },
    contentId: {
      type: String
    }
  },
  data() {
    return {
      menuItemIndex: 0,
      subMenuItemIndex: 0,
      contentItemIndex: 0
    };
  },
  computed: {
    subMenuList() {
      if (!Object.prototype.hasOwnProperty.call(this.menuList[this.menuItemIndex], "items")) return [];
      return this.menuList[this.menuItemIndex].items;
    }
  },
  methods: {
    getContent(id) {
      this.contentItemIndex = 0;

      const targeItem = this.menuList.find(({ id: itemId }) => itemId === id);
      if (targeItem != null && Object.prototype.hasOwnProperty.call(targeItem, "items")) {
        this.$emit("update:contentId", targeItem.items[0].id);
      } else {
        this.$emit("update:contentId", id);
      }
    }
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

    .v-btn {
      height: 30px !important;
    }

    .v-btn:before {
      background-color: transparent !important;
    }
  }
}
</style>
