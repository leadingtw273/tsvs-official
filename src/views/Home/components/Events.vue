<template>
  <v-sheet color="primary_light_1" height="100%" width="100%" tile>
    <v-sheet class="pa-12" color="transparent" height="23%">
      <span class="main-title display-1 white--text pb-5">活動消息</span>
    </v-sheet>
    <v-sheet class="d-flex flex-column justify-space-around px-12" color="primary" height="54%">
      <div class="d-flex align-center">
        <div class="d-flex justify-center mr-6" style="width: 20%;">
          <div class="d-flex flex-column text-subtitle-1" style="width: 100px;">
            <span class="text-center text-h4">21</span>
            <div class="d-flex justify-space-between" style="width: 100%;">
              <span>Dec.</span>
              <span>2019</span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-center" style="width: 80%;">
          <span class="headline">TSVS課程</span>
          <span class="title d-inline-block text-truncate" style="max-width: 100%;"
            >2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop</span
          >
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="d-flex justify-center mr-6" style="width: 20%;">
          <div class="d-flex flex-column text-subtitle-1" style="width: 100px;">
            <span class="text-center text-h4">13-21</span>
            <div class="d-flex justify-space-between">
              <span>Dec.</span>
              <span>2019</span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-center" style="width: 80%;">
          <span class="headline">TSVS課程</span>
          <span class="title d-inline-block text-truncate" style="max-width: 100%;"
            >2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop</span
          >
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="d-flex justify-center mr-6" style="width: 20%;">
          <div class="d-flex flex-column text-subtitle-1" style="width: 100px;">
            <span class="text-center text-h4">3-15</span>
            <div class="d-flex justify-space-between">
              <span>Dec.</span>
              <span>2019</span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-center" style="width: 80%;">
          <span class="headline">TSVS課程</span>
          <span class="title d-inline-block text-truncate" style="max-width: 100%;"
            >2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop</span
          >
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="d-flex justify-center mr-6" style="width: 20%;">
          <div class="d-flex flex-column text-subtitle-1" style="width: 100px;">
            <span class="text-center text-h4">5</span>
            <div class="d-flex justify-space-between">
              <span>Dec.</span>
              <span>2019</span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-center" style="width: 80%;">
          <span class="headline">TSVS課程</span>
          <span class="title d-inline-block text-truncate" style="max-width: 100%;"
            >2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop</span
          >
        </div>
      </div>
    </v-sheet>
    <v-sheet class="d-flex justify-end px-12 py-6" color="transparent" height="23%">
      <btn-more textColor="white" :to="{ name: 'NewsEvents' }"></btn-more>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "HomeEvents"
};
</script>

<style lang="scss" scoped>
span {
  color: white;
}
</style>
