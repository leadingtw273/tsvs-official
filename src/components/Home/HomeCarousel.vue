<template>
  <div class="the-carousel d-flex flex-row mx-12 mb-12">
    <v-carousel v-model="targetContent" class="image" height="100%" cycle hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="{ image } in items" :key="image">
        <v-img class="image" :src="image"></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-sheet class="content d-flex align-center pl-12" color="primary">
      <div
        :class="[i === targetContent ? 'd-flex' : 'd-none', 'flex-column']"
        v-for="({ text }, i) in items"
        :key="text.title"
      >
        <span class="display-1 white--text mb-1">{{ text.title }}</span>
        <span class="title font-weight-light white--text">{{ text.subTitle }}</span>

        <v-radio-group row v-model="targetContent">
          <v-radio class="ma-0" color="white" v-for="(item, i) in items" :key="i" :value="i" dark></v-radio>
        </v-radio-group>
      </div>
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
  }

  .content {
    border-radius: 0 40px 40px 0;
    height: 100%;
    width: 50%;
  }
}
</style>
