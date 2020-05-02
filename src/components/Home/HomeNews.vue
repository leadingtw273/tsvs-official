<template>
  <v-container>
    <div class="d-flex align-center">
      <v-divider vertical class="mr-5" style="height: 70px; max-width: 2px" color="black"></v-divider>
      <span class="display-1">News</span>
      <v-divider vertical class="align-self-center mx-4" style="height: 20px" color="black"></v-divider>
      <span class="display-1">最新動態</span>
    </div>

    <v-row>
      <v-col xs="12" sm="6" md="4">
        <v-sheet class="mx-auto pa-7" color="transparent" height="300px" width="300px">
          <v-sheet class="news-item d-flex flex-column align-center justify-center">
            <v-sheet class="item-date d-flex flex-column justify-center" color="white" height="80px" width="80px">
              <span class="display-1 text-center">21</span>
              <div class="d-flex justify-space-between">
                <div class="caption">Dec.</div>
                <div class="caption">2019</div>
              </div>
            </v-sheet>
            <span class="item-title title pb-4 mb-4">秘書處公告</span>
            <span class="subtitle-1 text-center px-4">2019 血管外科專科醫師甄試 通過名單</span>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-sheet class="mx-auto pa-7" color="transparent" height="300px" width="300px">
          <v-sheet class="news-item d-flex flex-column align-center justify-center">
            <v-sheet class="item-date d-flex flex-column justify-center" color="white" height="80px" width="80px">
              <span class="display-1 text-center">21</span>
              <div class="d-flex justify-space-between">
                <div class="caption">Dec.</div>
                <div class="caption">2019</div>
              </div>
            </v-sheet>
            <span class="item-title title pb-4 mb-4">秘書處公告</span>
            <span class="subtitle-1 text-center px-4">2019 血管外科專科醫師甄試 通過名單</span>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-sheet class="mx-auto pa-7" color="transparent" height="300px" width="300px">
          <v-sheet class="news-item d-flex flex-column align-center justify-center">
            <v-sheet class="item-date d-flex flex-column justify-center" color="white" height="80px" width="80px">
              <span class="display-1 text-center">21</span>
              <div class="d-flex justify-space-between">
                <div class="caption">Dec.</div>
                <div class="caption">2019</div>
              </div>
            </v-sheet>
            <span class="item-title title pb-4 mb-4">秘書處公告</span>
            <span class="subtitle-1 text-center px-4">2019 血管外科專科醫師甄試 通過名單</span>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-sheet class="mx-auto pa-7" color="transparent" height="300px" width="300px">
          <v-sheet class="news-item d-flex flex-column align-center justify-center">
            <v-sheet class="item-date d-flex flex-column justify-center" color="white" height="80px" width="80px">
              <span class="display-1 text-center">21</span>
              <div class="d-flex justify-space-between">
                <div class="caption">Dec.</div>
                <div class="caption">2019</div>
              </div>
            </v-sheet>
            <span class="item-title title pb-4 mb-4">秘書處公告</span>
            <span class="subtitle-1 text-center px-4">2019 血管外科專科醫師甄試 通過名單</span>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-sheet class="mx-auto pa-7" color="transparent" height="300px" width="300px">
          <v-sheet class="news-item d-flex flex-column align-center justify-center">
            <v-sheet class="item-date d-flex flex-column justify-center" color="white" height="80px" width="80px">
              <span class="display-1 text-center">21</span>
              <div class="d-flex justify-space-between">
                <div class="caption">Dec.</div>
                <div class="caption">2019</div>
              </div>
            </v-sheet>
            <span class="item-title title pb-4 mb-4">秘書處公告</span>
            <span class="subtitle-1 text-center px-4">2019 血管外科專科醫師甄試 通過名單</span>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-sheet class="mx-auto pa-7" color="transparent" height="300px" width="300px">
          <v-sheet class="news-item d-flex flex-column align-center justify-center">
            <v-sheet class="item-date d-flex flex-column justify-center" color="white" height="80px" width="80px">
              <span class="display-1 text-center">21</span>
              <div class="d-flex justify-space-between">
                <div class="caption">Dec.</div>
                <div class="caption">2019</div>
              </div>
            </v-sheet>
            <span class="item-title title pb-4 mb-4">秘書處公告</span>
            <span class="subtitle-1 text-center px-4">2019 血管外科專科醫師甄試 通過名單</span>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>

    <v-btn text small rounded class="text-lowercase d-flex ml-auto mb-6">more >></v-btn>
  </v-container>
</template>

<script>
export default {
  name: "HomeNews"
};
</script>

<style lang="scss" scoped>
.news-item {
  position: relative;
  border: black 2px solid;
  border-radius: 20%;
  height: 100%;
  width: 100%;

  .item-date {
    position: absolute;
    top: -40px;
  }

  .item-title {
    border-bottom: black 1px solid;
  }
}
</style>
