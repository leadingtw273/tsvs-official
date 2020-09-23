<template>
  <div class="the-view-content-card d-flex flex-row mx-12 mb-12">
    <side-bar
      :menuTitle="menuTitle"
      :menuList="menuList"
      :mainMenuIndex.sync="mainMenuIndex"
      :subMenuIndex.sync="subMenuIndex"
    ></side-bar>
    <v-sheet color="secondary" class="sidebar-content py-12 px-8">
      <card-header :mainText="mainItem.text" :subText="subItem != null ? subItem.text : ''"></card-header>

      <div class="ma-12">
        <component class="px-12" :is="displayComponent" :fetchUrl="targetItem.fetchUrl"></component>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import CardHeader from "./components/CardHeader";
import CardContent from "./components/CardContent";
import CardContentList from "./components/CardContentList";

export default {
  name: "TheViewContentCard",
  components: { SideBar, CardHeader, CardContent, CardContentList },
  props: {
    menuTitle: {
      type: String,
      required: true
    },
    menuList: {
      type: Array,
      required: true,
      validator(arr) {
        return arr.every(item => {
          const checkProperty = Object.prototype.hasOwnProperty.bind(item);
          return (
            checkProperty("text") &&
            checkProperty("pageName") &&
            (checkProperty("displayType") || checkProperty("items"))
          );
        });
      }
    }
  },
  data() {
    return {
      mainMenuIndex: 0,
      subMenuIndex: 0
    };
  },
  computed: {
    mainItem() {
      return this.menuList[this.mainMenuIndex];
    },
    subItem() {
      if (this.mainItem.items == null) return null;
      return this.mainItem.items[this.subMenuIndex];
    },
    targetItem() {
      return this.subItem != null ? this.subItem : this.mainItem;
    },
    currentPath() {
      return this.$route.path;
    },
    displayComponent() {
      const componentMap = new Map([
        ["content", "CardContent"],
        ["list", "CardContentList"],
        ["page", "RouterView"]
      ]);

      return componentMap.get(this.targetItem.displayType);
    }
  },
  watch: {
    currentPath() {
      this.setMenuIndex();
    }
  },
  methods: {
    getPathText() {
      const path = this.$route.path;

      let mainMenuText = null;
      let subMenuText = null;
      if (this.$store.state.view === "admin") {
        [, , , mainMenuText, subMenuText] = path.split("/");
      } else {
        [, , mainMenuText, subMenuText] = path.split("/");
      }

      return { mainMenuText, subMenuText };
    },
    parseIndexByText(itemList, parseText) {
      const result = itemList.findIndex(({ text }) => text === parseText);
      return result === -1 ? 0 : result;
    },
    setMenuIndex() {
      const { mainMenuText, subMenuText } = this.getPathText();

      this.mainMenuIndex = this.parseIndexByText(this.menuList, mainMenuText);

      if (subMenuText != null) {
        this.subMenuIndex = this.parseIndexByText(this.mainItem.items, subMenuText);
      }
    }
  },
  mounted() {
    this.setMenuIndex();
  }
};
</script>

<style lang="scss" scoped>
.the-view-content-card {
  min-height: 500px;

  .sidebar-content {
    border-radius: 0 40px 40px 0;
    width: 80%;
  }
}
</style>
