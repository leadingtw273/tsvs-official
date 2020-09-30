<template>
  <div>
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
          <v-text-field label="查詢姓名" v-model="searchText" outlined hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="auto" class="d-flex">
          <v-btn class="align-self-center" @click="isSearch = true" color="primary" large rounded>查詢</v-btn>
        </v-col>
      </v-row>

      <v-divider class="d-flex my-6"></v-divider>
      <span class="d-flex my-6">查詢結果: </span>
      <template v-if="isSearch && searchText === '王'">
        <v-simple-table class="transparent" dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>王仁亮</td>
                <td>主治醫師兼主任</td>
                <td>現任</td>
                <td>血液腫瘤科主治醫師</td>
                <td>
                  <v-btn
                    @click="
                      dialog = true;
                      clickItem = 0;
                    "
                    color="primary"
                    class="text-lowercase"
                    v-text="'more >>'"
                    tag="button"
                    text
                    small
                    rounded
                  ></v-btn>
                </td>
              </tr>
              <tr>
                <td>王小民</td>
                <td>主治醫師兼主任</td>
                <td>現任</td>
                <td>血液腫瘤科主治醫師</td>
                <td>
                  <v-btn
                    @click="
                      dialog = true;
                      clickItem = 1;
                    "
                    color="primary"
                    class="text-lowercase"
                    v-text="'more >>'"
                    tag="button"
                    text
                    small
                    rounded
                  ></v-btn>
                </td>
              </tr>
              <tr>
                <td>王文宏</td>
                <td>主治醫師兼主任</td>
                <td>現任</td>
                <td>血液腫瘤科主治醫師</td>
                <td>
                  <v-btn
                    @click="
                      dialog = true;
                      clickItem = 2;
                    "
                    color="primary"
                    class="text-lowercase"
                    v-text="'more >>'"
                    tag="button"
                    text
                    small
                    rounded
                  ></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <template v-else>
        <span class="text-h6">無</span>
      </template>
    </v-sheet>

    <v-dialog v-model="dialog" width="250">
      <v-card dark>
        <v-card-text class="d-flex flex-column align-center pa-6">
          <v-img :src="imageList[clickItem]" max-height="250" max-width="200"></v-img>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click.stop="dialog = false">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "SearchDoctor",
  data() {
    return {
      searchText: "",
      isSearch: false,
      clickItem: 0,
      dialog: false,
      imageList: [
        "https://picsum.photos/id/0/200/250",
        "https://picsum.photos/id/1/200/250",
        "https://picsum.photos/id/2/200/250"
      ]
    };
  }
};
</script>

<style lang="scss"></style>
