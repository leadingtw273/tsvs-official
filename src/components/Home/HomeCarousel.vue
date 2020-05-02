<template>
  <div class="the-carousel d-flex flex-row mx-12 mb-12">
    <v-img class="image" src="../../assets/carousel/carousel01.jpg"></v-img>
    <v-sheet class="content d-flex justify-center align-center" color="primary">
      <div>
        <span class="d-block display-1 white--text mb-1">台灣血管外科學會</span>
        <span class="d-block title font-weight-light white--text">Taiwan Society for Vascular Surgery</span>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      items: [
        {
          image: "https://cw1.tw/CW/images/article/C1323775766370.jpg",
          text: { title: "台灣血管外科學會", subTitle: "Taiwan Society for Vascular Surgery" }
        },
        {
          image: "https://www.medicaltravel.org.tw/img/section1bg1.jpg",
          text: { title: "醫療大數據－精準醫學的前哨站", subTitle: "Precision Medicine" }
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
    width: 70%;
  }

  .content {
    border-radius: 0 40px 40px 0;
    height: 100%;
    width: 30%;
  }
}
</style>
