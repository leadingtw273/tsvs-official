<template>
  <v-simple-table class="transparent">
    <template v-slot:default>
      <tbody>
        <tr>
          <td class="title">2019-10-15</td>
          <td class="title">第八屆第一次理監事會議紀錄</td>
          <td><btn-more class="ml-3"></btn-more></td>
        </tr>
        <tr>
          <td class="title">2019-09-11</td>
          <td class="title">第八屆第一次會員大會紀錄</td>
          <td><btn-more class="ml-3"></btn-more></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "MeetingRecord"
};
</script>

<style lang="scss"></style>
