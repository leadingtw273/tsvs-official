<template>
  <div class="the-carousel d-flex flex-row mx-12 mb-12">
    <v-carousel v-model="targetContent" class="image" height="100%" cycle hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="{ image } in items" :key="image">
        <v-img :src="image" height="100%"></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-sheet class="content d-flex flex-column justify-center px-12" color="primary">
      <div v-for="({ text }, i) in items" :key="text.title">
        <div class="d-flex flex-column" v-if="i === targetContent">
          <span class="d-inline-block text-truncate display-2 white--text mb-1">{{ text.title }}</span>
          <span class="title d-inline-block text-truncate font-weight-light white--text">{{ text.subTitle }}</span>
        </div>
      </div>
      <v-radio-group row v-model="targetContent">
        <v-radio class="ma-0" color="white" v-for="(item, i) in items" :key="i" :value="i" dark></v-radio>
      </v-radio-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      targetContent: 0,
      items: [
        {
          image: "https://cw1.tw/CW/images/article/C1323775766370.jpg",
          text: { title: "台灣血管外科學會", subTitle: "Taiwan Society for Vascular Surgery" }
        },
        {
          image: "https://www.medicaltravel.org.tw/img/section1bg1.jpg",
          text: { title: "醫療大數據", subTitle: "Precision Medicine" }
        },
        {
          image: "https://buzzorange.com/techorange/wp-content/uploads/sites/2/2019/04/doctor-1024x681.webp?jpeg",
          text: {
            title: "人工智慧的醫療照護應用",
            subTitle: "小病就跑大醫院？減少醫療浪費"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.the-carousel {
  border-radius: 40px;
  height: 700px;

  .image {
    border-radius: 40px 0 0 40px;
    height: 100%;
    width: 65%;
  }

  .content {
    border-radius: 0 40px 40px 0;
    height: 100%;
    width: 35%;
  }
}
</style>
