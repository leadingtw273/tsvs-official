<template>
  <div>
    <span class="headline accent--text">【會議】TSVS 第八屆第二次夏季學術研討會</span>
    <v-divider class="my-6"></v-divider>
    <v-row dense>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>活動日期</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center" style="width: 80%">
          <span>2020/06/05 星期五 07:40~09:00</span>
        </div>
      </v-col>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>主辦單位</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center" style="width: 80%">
          <span>高雄榮民總醫院放射線部</span>
        </div>
      </v-col>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>活動地點</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center" style="width: 80%">
          <span>高雄榮民總醫院放射線部中會議室</span>
        </div>
      </v-col>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>活動內容</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center" style="width: 80%">
          <v-btn color="primary" outlined>資料下載</v-btn>
        </div>
      </v-col>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>教育積分</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center" style="width: 80%">
          <span>10 分</span>
        </div>
      </v-col>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>報名連結</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center" style="width: 80%">
          <span>https://hackmd.io/H_RSFbuKROexI5zwQbsXbQ</span>
        </div>
      </v-col>
      <v-col class="d-flex title" cols="12">
        <div class="d-inline-flex align-self-center" style="width: 15%">
          <span>聯絡資訊</span>
          <v-divider class="mx-6" vertical></v-divider>
        </div>
        <div class="d-inline-flex align-self-center flex-column" style="width: 80%">
          <span class="subtitle-1">陳枝尾</span>
          <span class="subtitle-1">Tel: 07-1234567#1234</span>
          <span class="subtitle-1">Email: leadingtw@gmail.com</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  data() {
    return {
      targetId: this.$route.params.id,
      event: {
        image: "https://fakeimg.pl/250x100/",
        class: "會議",
        name: "【會議】TSVS 第八屆第二次夏季學術研討會",
        start: "2020-06-25 08:50",
        end: "2020-06-25 017:00"
      }
    };
  }
};
</script>

<style></style>
