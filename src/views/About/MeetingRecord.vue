<template>
  <div class="d-flex my-12 px-12">
    <v-simple-table class="transparent">
      <template v-slot:default>
        <tbody>
          <tr>
            <td>2019-10-15</td>
            <td>第八屆第一次理監事會議紀錄</td>
            <td><v-btn text small rounded class="text-lowercase ml-3">more >></v-btn></td>
          </tr>
          <tr>
            <td>2019-09-11</td>
            <td>第八屆第一次會員大會紀錄</td>
            <td><v-btn text small rounded class="text-lowercase ml-3">more >></v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "MeetingRecord"
};
</script>

<style lang="scss"></style>
