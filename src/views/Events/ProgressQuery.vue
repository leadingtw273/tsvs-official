<template>
  <div class="px-12 my-12">
    <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" dark>
      <template v-slot:item.progress="{ item }">
        <template v-if="item.progress === 'pending'">
          <span class="subtitle-1">待審查</span>
        </template>
        <template v-else-if="item.progress === 'Failed'">
          <span class="subtitle-1 red--text ">未通過</span>
          <span class="subtitle-1">，原因：{{ item.reason }}</span>
        </template>
        <template v-else-if="item.progress === 'pass'">
          <span class="subtitle-1 green--text ">通過</span>
          <span>，</span>
          <v-btn color="confirm" class="subtitle-1" outlined small>簽名單</v-btn>
        </template>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "ProgressQuery",
  data() {
    return {
      headers: [
        { text: "識別碼", value: "id" },
        { text: "活動日期", value: "date" },
        { text: "活動主題", value: "name" },
        { text: "目前進度", value: "progress", width: 180 }
      ],
      items: [
        {
          id: "10435",
          date: "2020/05/30 08:10",
          name: "優質影像工作坊 - 線上研討會",
          progress: "Failed",
          reason: "課表未提供講師及課程資料",
          signature: ""
        },
        {
          id: "10458",
          date: "2020/05/31 08:30",
          name: "2020/07/05骨鬆專科醫師學分班",
          progress: "pass",
          reason: "",
          signature: ""
        },
        {
          id: "10444",
          date: "2020/06/13 08:50",
          name: "林口長庚醫院專題演講",
          progress: "Failed",
          reason: "請提供課表",
          signature: ""
        },
        {
          id: "10471",
          date: "2020/07/04 09:00",
          name: "4th Japan-Taiwan IPF Case Discussion Meeting",
          progress: "pending",
          reason: "",
          signature: ""
        }
      ]
    };
  }
};
</script>

<style></style>
