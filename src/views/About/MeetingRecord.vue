<template>
  <div class="d-flex my-12 px-12">
    <v-sheet color="transparent" class="d-flex justify-center" width="100%" v-if="user === ''">
      <div class="d-flex flex-column align-center">
        <v-icon color="primary" size="100">mdi-account-circle</v-icon>
        <div class="title">登入會員以瀏覽此資料</div>
        <div class="mt-4">
          <v-btn class="title" color="primary" :to="{ name: 'MemberSignIn' }" text small>會員登入</v-btn>
          <v-btn class="title" color="accent" :to="{ name: 'MemberSignUp' }" text small>會員註冊</v-btn>
        </div>
      </div>
    </v-sheet>
    <v-simple-table class="transparent" v-else>
      <template v-slot:default>
        <tbody>
          <tr>
            <td class="title">2019-10-15</td>
            <td class="title">第八屆第一次理監事會議紀錄</td>
            <td><v-btn text small rounded class="text-lowercase ml-3">more >></v-btn></td>
          </tr>
          <tr>
            <td class="title">2019-09-11</td>
            <td class="title">第八屆第一次會員大會紀錄</td>
            <td><v-btn text small rounded class="text-lowercase ml-3">more >></v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "MeetingRecord",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss"></style>
