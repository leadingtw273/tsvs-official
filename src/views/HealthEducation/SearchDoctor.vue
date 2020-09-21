<template>
  <div class="my-12 px-12">
    <v-sheet color="transparent" max-width="600px">
      <v-row>
        <v-col cols="auto" class="d-flex">
          <span class="align-self-center mr-6">服務醫院</span>
        </v-col>
        <v-col cols="3" class="d-flex">
          <v-text-field label="縣市" outlined hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="3" class="d-flex">
          <v-text-field label="區/鄉鎮" outlined hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="3" class="d-flex">
          <v-text-field label="醫院" outlined hide-details="auto"></v-text-field>
        </v-col>
        <v-col class="d-flex">
          <span class="align-self-center mr-6">查詢姓名</span>
          <v-text-field label="查詢姓名" outlined hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="auto" class="d-flex">
          <v-btn class="align-self-center" color="primary" large rounded>查詢</v-btn>
        </v-col>
      </v-row>

      <v-divider class="d-flex my-6"></v-divider>
      <span class="d-flex my-6">查詢結果: </span>
      <v-simple-table class="transparent" dense>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>陳仁亮</td>
              <td>主治醫師兼主任</td>
              <td>現任</td>
              <td>血液腫瘤科主治醫師</td>
              <td><btn-more></btn-more></td>
            </tr>
            <tr>
              <td>陳仁亮</td>
              <td>主治醫師兼主任</td>
              <td>現任</td>
              <td>血液腫瘤科主治醫師</td>
              <td><btn-more></btn-more></td>
            </tr>
            <tr>
              <td>陳仁亮</td>
              <td>主治醫師兼主任</td>
              <td>現任</td>
              <td>血液腫瘤科主治醫師</td>
              <td><btn-more></btn-more></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "SearchDoctor"
};
</script>

<style lang="scss"></style>
