<template>
  <div class="my-12 px-12">
    <div class="訓練醫院內容">
      <div class="訓練醫院內容__2ec4fd8561cc443ca509789bd7eba3b2 mb-6">
        108年度血管外科專科醫師訓練醫院認定合格醫院名單
      </div>
      <div class="訓練醫院內容__e0e82287de6a4e18bee405f16b92c7a5">
        2019/03/15理監事會議新增彰化基督教醫院, 共計29間醫院 /
        102年度起，專科醫師甄試若所屬醫院不在訓練醫院合格名單，則不具備考試資格
        <br />

        <div class="d-flex mt-6">
          <v-simple-table class="transparent mr-6" dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="hospital in list_1" :key="hospital">
                  <td>{{ hospital }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <br />———————————————————————————————————— <br />彰化秀傳紀念醫院(107年度無專科指導醫師取消訓練醫院資格)
        <br />臺中醫院 (103年新增認定)(107年度無專科指導醫師取消訓練醫院資格)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainingHospital",
  data() {
    return {
      list_1: [
        "三軍總醫院",
        "大林慈濟醫院",
        "中山醫學大學附設醫院",
        "台大醫院",
        "台大新竹醫院",
        "台中慈濟醫院",
        "台中榮民總醫院",
        "台北市立聯合醫院仁愛院區",
        "台北慈濟醫院",
        "台北榮民總醫院",
        "台北醫學大學附設醫院",
        "成大醫院",
        "亞東醫院",
        "林口長庚醫院",
        "花蓮慈濟醫院",
        "振興醫院",
        "馬偕醫院",
        "高雄長庚醫院",
        "高雄榮民總醫院",
        "高雄醫學大學附設中和醫院",
        "國軍高雄總醫院",
        "基隆長庚醫院",
        "童綜合醫院",
        "新光醫院",
        "萬芳醫院",
        "嘉義長庚醫院",
        "嘉義基督教醫院",
        "彰化基督教醫院(108年新增認定)",
        "雙和醫院"
      ]
    };
  }
};
</script>

<style lang="scss">
.衛服部連結內容 {
  &__0497399d91f141c6aefd225d39503cc4 {
    font-size: 23px;
    line-height: (34 / 23);
    font-weight: 300;
    color: #121a33;
  }

  &__c79463cc70444a83b3693c2b3b7198a3 {
    font-size: 18px;
    line-height: (34 / 18);
    font-weight: 300;
    color: #121a33;
  }
}
</style>
