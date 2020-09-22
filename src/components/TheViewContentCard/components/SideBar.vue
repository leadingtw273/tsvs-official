<template>
  <v-sheet color="primary" class="side-bar px-8 py-12" dark>
    <span class="d-flex headline mb-2 ml-4">{{ menuTitle }}</span>
    <v-btn-toggle class="d-flex flex-column" v-model="mainIndex" color="confirm" mandatory group>
      <template v-for="({ text, pageName, items }, i) in menuList">
        <v-divider class="item-divider ml-4" :key="text + '_divider'" v-if="i !== 0"></v-divider>
        <v-btn class="main-menu justify-start title" :to="{ name: pageName }" :key="text">
          {{ text }}
        </v-btn>

        <v-btn-toggle
          class="d-flex flex-column"
          v-model="subIndex"
          v-if="items != null && mainIndex === i"
          color="confirm"
          :key="text + '_sub'"
          mandatory
          group
        >
          <v-btn
            class="sub-menu subtitle-1 justify-start"
            v-for="{ text: subText, pageName: subPageName } in items"
            :to="{ name: subPageName }"
            :key="subText"
          >
            {{ subText }}
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-btn-toggle>
  </v-sheet>
</template>

<script>
export default {
  props: {
    menuTitle: {
      type: String,
      required: true
    },
    menuList: {
      type: Array,
      required: true
    },
    mainMenuIndex: {
      type: Number,
      required: true
    },
    subMenuIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    mainIndex: {
      get() {
        return this.mainMenuIndex;
      },
      set(val) {
        this.$emit("update:mainMenuIndex", val);
        this.$emit("update:subMenuIndex", 0);
      }
    },
    subIndex: {
      get() {
        return this.subMenuIndex;
      },
      set(val) {
        this.$emit("update:subMenuIndex", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
