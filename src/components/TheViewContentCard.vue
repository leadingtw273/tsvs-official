<template>
  <div class="the-view-content-card d-flex flex-row mx-12 mb-12">
    <v-sheet color="primary" class="side-bar px-8 py-12" v-if="hasSidebar" dark>
      <span class="d-flex headline mb-2 ml-4">{{ menuTitle }}</span>

      <v-btn-toggle class="d-flex flex-column" v-model="menuIndex" color="confirm" mandatory group>
        <template v-for="({ text, link, show = true }, i) in menuList">
          <v-divider class="item-divider ml-4" :key="text + '_divider'" v-if="show && i !== 0"></v-divider>
          <v-btn :to="link" class="main-menu justify-start title" :key="text" v-if="show">
            {{ text }}
          </v-btn>
          <v-btn-toggle
            class="d-flex flex-column"
            v-model="subMenuIndex"
            v-if="menuIndex === i && subMenuList.length !== 0"
            color="confirm"
            :key="text + '_subGroup'"
            mandatory
            group
          >
            <v-btn
              class="sub-menu subtitle-1 justify-start"
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
    <v-sheet color="secondary" :class="[hasSidebar ? 'sidebar-content' : 'content', 'py-12', 'px-8']">
      <div class="d-flex flex-row mb-6">
        <v-btn icon text large class="primary--text" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="d-flex">
          <v-divider class="mx-6" color="black" vertical></v-divider>
          <span class="headline align-self-center">{{ hasSidebar ? menuList[menuIndex].text : menuTitle }}</span>
        </div>
        <div class="d-flex" v-if="hasSidebar && subMenuList[subMenuIndex] != null">
          <v-divider class="mx-6" color="black" vertical></v-divider>
          <span class="headline align-self-center">{{ subMenuList[subMenuIndex].text }}</span>
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
  name: "TheViewContentCard",
  props: {
    menuTitle: {
      type: String,
      default: "學會資訊"
    },
    menuList: {
      type: Array,
      default() {
        return [];
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
      if (!this.hasSidebar) return [];
      if (!Object.prototype.hasOwnProperty.call(this.menuList[this.menuIndex], "items")) return [];
      return this.menuList[this.menuIndex].items;
    },
    hasSidebar() {
      return this.menuList.length !== 0;
    }
  },
  methods: {
    setMenuIndex() {
      const path = this.$route.path;

      let menuText = null;
      let subMenuText = null;
      if (this.$store.state.view === "admin") {
        [, , , menuText, subMenuText] = path.split("/");
      } else {
        [, , menuText, subMenuText] = path.split("/");
      }

      const menuFindIndex = this.menuList.findIndex(({ text }) => text === menuText);
      this.menuIndex = menuFindIndex === -1 ? 0 : menuFindIndex;

      const subMenuFindIndex = this.subMenuList.findIndex(({ text }) => text === subMenuText);
      this.subMenuIndex = subMenuFindIndex === -1 ? 0 : subMenuFindIndex;
    }
  },
  mounted() {
    if (this.hasSidebar) this.setMenuIndex();
  }
};
</script>

<style lang="scss" scoped>
.the-view-content-card {
  min-height: 500px;

  .side-bar {
    border-radius: 40px 0 0 40px;
    width: 20%;

    .item-divider {
      width: 65px;
      margin: 10px;

      opacity: 0.6;
      background-color: white;
    }

    .main-menu {
      height: 30px !important;
    }

    .sub-menu {
      margin: 0;
      margin-left: 20px;
      height: 30px !important;
    }

    .v-btn:before {
      background-color: transparent !important;
    }
  }

  .sidebar-content {
    border-radius: 0 40px 40px 0;
    width: 80%;
  }

  .content {
    border-radius: 40px;
    width: 100%;
  }
}
</style>
