<template>
  <div class="my-12 px-12">
    <div class="組織名單">
      <div class="組織名單__b93efead07ab4f5783b42d8d1ebad4dc d-flex flex-column">
        <span class="display-1">理監事</span>

        <span class="headline">第八屆理監事暨學會幹部名單</span>
        <div class="d-flex my-6">
          <v-simple-table class="transparent mr-6" dense v-for="group in list_1.length / 8" :key="group">
            <template v-slot:default>
              <tbody>
                <tr v-for="{ name, position } in list_1.slice((group - 1) * 8, group * 8)" :key="name + position">
                  <td>
                    <v-btn class="title" rounded text small>{{ name }}</v-btn>
                  </td>
                  <td class="title">{{ position }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <span class="headline">{{ "歷屆名單 / " + supervisorList[supervisorItemIndex].text }}</span>
        <v-btn-toggle
          class="d-flex flex-wrap"
          v-model="supervisorItemIndex"
          v-if="supervisorList.length !== 0"
          color="accent"
          mandatory
          group
        >
          <v-btn
            :class="[supervisorItemIndex === i ? 'v-btn--confirm' : 'primary--text', 'title']"
            @click="supervisorItemIndex = i"
            v-for="({ text, tag }, i) in supervisorList"
            :key="text"
          >
            {{ text }}
          </v-btn>
        </v-btn-toggle>

        <div class="d-flex my-6">
          <v-simple-table class="transparent mr-6" dense v-for="group in list_2.length / 8" :key="group">
            <template v-slot:default>
              <tbody>
                <tr v-for="{ name, position } in list_2.slice((group - 1) * 8, group * 8)" :key="name + position">
                  <td>
                    <v-btn class="title" rounded text small>{{ name }}</v-btn>
                  </td>
                  <td class="title">{{ position }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <span class="display-1">委員會</span>

        <span class="headline">第八屆委員會名單</span>
        <div class="d-flex flex-wrap my-6">
          <v-simple-table class="transparent mr-6 mb-6" dense v-for="{ title, list } in list_3" :key="title">
            <template v-slot:default>
              <thead>
                <th class="text-left headline">{{ title }}</th>
              </thead>
              <tbody>
                <tr v-for="{ name, position } in list" :key="name + position">
                  <td>
                    <v-btn class="title" rounded text small>{{ name }}</v-btn>
                  </td>
                  <td class="title">{{ position }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <span class="headline">{{ "歷屆名單 / " + committeeList[committeeItemIndex].text }}</span>
        <v-btn-toggle
          class="d-flex flex-wrap"
          v-model="committeeItemIndex"
          v-if="committeeList.length !== 0"
          color="accent"
          mandatory
          group
        >
          <v-btn
            :class="[committeeItemIndex === i ? 'v-btn--confirm' : 'primary--text', 'title']"
            @click="committeeItemIndex = i"
            v-for="({ text, tag }, i) in committeeList"
            :key="text"
          >
            {{ text }}
          </v-btn>
        </v-btn-toggle>

        <div class="d-flex flex-wrap my-6">
          <v-simple-table class="transparent mr-6 mb-6" dense v-for="{ title, list } in list_4" :key="title">
            <template v-slot:default>
              <thead>
                <th class="text-left headline">{{ title }}</th>
              </thead>
              <tbody>
                <tr v-for="{ name, position } in list" :key="name + position">
                  <td>
                    <v-btn class="title" rounded text small>{{ name }}</v-btn>
                  </td>
                  <td class="title">{{ position }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizationList",
  data() {
    return {
      supervisorItemIndex: 0,
      supervisorList: [
        { text: "第七屆", tag: "#第七屆" },
        { text: "第六屆", tag: "#第六屆" },
        { text: "第五屆", tag: "#第五屆" },
        { text: "第四屆", tag: "#第四屆" }
      ],
      committeeItemIndex: 0,
      committeeList: [
        { text: "第七屆", tag: "#第七屆" },
        { text: "第六屆", tag: "#第六屆" },
        { text: "第五屆", tag: "#第五屆" },
        { text: "第四屆", tag: "#第四屆" }
      ],
      list_1: [
        { name: "甘宗旦", position: "理事長" },
        { name: "李芳艷", position: "副理事長" },
        { name: "陳益祥", position: "副理事長" },
        { name: "吳毅暉", position: "常務理事" },
        { name: "魏崢", position: "常務理事" },
        { name: "柯博仁", position: "常務理事" },
        { name: "張睿智", position: "常務理事" },
        { name: "李國楨", position: "理事" },
        { name: "林致源", position: "理事" },
        { name: "張兼華", position: "理事" },
        { name: "陳沂名", position: "理事" },
        { name: "陳映澄", position: "理事" },
        { name: "陳哲伸", position: "理事" },
        { name: "黃耀廣", position: "理事" },
        { name: "詹志洋", position: "理事" },
        { name: "劉國聖", position: "理事" },
        { name: "蔡宜廷", position: "理事" },
        { name: "鄭伯智", position: "理事" },
        { name: "謝世榮", position: "理事" },
        { name: "顏旭霆", position: "理事" },
        { name: "李中毅", position: "理事" },
        { name: "張忠毅", position: "常務監事" },
        { name: "李秋陽", position: "監事" },
        { name: "林暉翰", position: "監事" },
        { name: "許傳智", position: "監事" },
        { name: "陳柏霖", position: "監事" },
        { name: "蔡忠霖", position: "監事" },
        { name: "羅健洺", position: "監事" },
        { name: "許喬博", position: "秘書長" },
        { name: "劉國聖", position: "副秘書長" },
        { name: "黃建偉", position: "副秘書長" },
        { name: "曾政哲", position: "財務長" }
      ],
      list_2: [
        { name: "林佳勳", position: "理事長" },
        { name: "李芳艷", position: "副理事長" },
        { name: "柯博仁", position: "副理事長" },
        { name: "林致源", position: "常務理事" },
        { name: "許喬博", position: "常務理事" },
        { name: "陳沂名", position: "常務理事" },
        { name: "魏崢", position: "常務理事" },
        { name: "李國楨", position: "理事" },
        { name: "吳毅暉", position: "理事" },
        { name: "李中毅", position: "理事" },
        { name: "康沛倫", position: "理事" },
        { name: "黃耀廣", position: "理事" },
        { name: "詹志洋", position: "理事" },
        { name: "劉國聖", position: "理事" },
        { name: "陳偉華", position: "理事" },
        { name: "陳益祥", position: "理事" },
        { name: "謝世榮", position: "理事" },
        { name: "蔡宜廷", position: "理事" },
        { name: "謝炯昭", position: "理事" },
        { name: "顏旭霆", position: "理事" },
        { name: "鄭伯智", position: "理事" },
        { name: "張忠毅", position: "常務監事" },
        { name: "李秋陽", position: "監事" },
        { name: "林暉翰", position: "監事" },
        { name: "許傳智", position: "監事" },
        { name: "陳柏霖", position: "監事" },
        { name: "蔡忠霖", position: "監事" },
        { name: "羅健洺", position: "監事" },
        { name: "甘宗旦", position: "秘書長" },
        { name: "陳映澄", position: "副秘書長" },
        { name: "張兼華", position: "副秘書長" },
        { name: "陳彥仰", position: "財務長" }
      ],
      list_3: [
        {
          title: "臨床委員會",
          list: [
            { name: "蔡宜廷", position: "主委" },
            { name: "李國楨", position: "副主委" },
            { name: "顏旭霆", position: "委員" },
            { name: "溫日昇", position: "委員" },
            { name: "謝炯昭", position: "委員" },
            { name: "林宜璋", position: "委員" },
            { name: "蔡孝恩", position: "委員" }
          ]
        },
        {
          title: "學術委員會",
          list: [
            { name: "陳沂名", position: "主委" },
            { name: "張睿智", position: "副主委" },
            { name: "陳懷民", position: "委員" },
            { name: "吳毅暉", position: "委員" },
            { name: "蔡忠霖", position: "委員" },
            { name: "蘇大維", position: "委員" },
            { name: "蔡宜廷", position: "委員" },
            { name: "孫珅", position: "委員" },
            { name: "謝世榮", position: "委員" }
          ]
        },
        {
          title: "教育委員會",
          list: [
            { name: "陳映澄", position: "主委" },
            { name: "陳哲伸", position: "副主委" },
            { name: "李明禮", position: "委員" },
            { name: "吳南鈞", position: "委員" },
            { name: "劉殷佐", position: "委員" },
            { name: "謝福謙", position: "委員" }
          ]
        },
        {
          title: "研究委員會",
          list: [
            { name: "林致源", position: "主委" },
            { name: "劉國聖", position: "副主委" },
            { name: "阮俊能", position: "委員" },
            { name: "許俊傑", position: "委員" }
          ]
        },
        {
          title: "編輯委員會",
          list: [
            { name: "張兼華", position: "主委" },
            { name: "陳柏霖", position: "副主委" },
            { name: "林寶彥", position: "委員" },
            { name: "陳泰位", position: "委員" },
            { name: "蘇大維", position: "委員" },
            { name: "張得一", position: "委員" },
            { name: "黃世銘", position: "委員" },
            { name: "楊智鈞", position: "委員" }
          ]
        },
        {
          title: "國際及公共事務委員會",
          list: [
            { name: "吳毅暉", position: "主委" },
            { name: "蔡忠霖", position: "副主委" },
            { name: "袁明琦", position: "委員" },
            { name: "柯博仁", position: "委員" },
            { name: "陳偉華", position: "委員" },
            { name: "陳沂名", position: "委員" },
            { name: "蔡孝恩", position: "委員" }
          ]
        },
        {
          title: "甄審委員會",
          list: [
            { name: "詹志洋", position: "主委" },
            { name: "許傳智", position: "副主委" },
            { name: "康沛倫", position: "委員" }
          ]
        }
      ],
      list_4: [
        {
          title: "臨床委員會",
          list: [
            { name: "蔡宜廷", position: "主委" },
            { name: "姜智耀", position: "副主委" },
            { name: "李中毅", position: "委員" },
            { name: "溫日昇", position: "委員" },
            { name: "賴金湖", position: "委員" },
            { name: "陳哲伸", position: "委員" },
            { name: "楊翔宇", position: "委員" }
          ]
        },
        {
          title: "學術委員會",
          list: [
            { name: "許喬博", position: "主委" },
            { name: "吳毅暉", position: "副主委" },
            { name: "謝炯昭", position: "委員" },
            { name: "孫珅", position: "委員" },
            { name: "黃竣暘", position: "委員" },
            { name: "袁于婷", position: "委員" }
          ]
        },
        {
          title: "編輯委員會",
          list: [
            { name: "張睿智", position: "主委" },
            { name: "賴韋良", position: "副主委" },
            { name: "李宗龍", position: "委員" },
            { name: "陳柏霖", position: "委員" },
            { name: "翁世憲", position: "委員" },
            { name: "鄭伊佐", position: "委員" },
            { name: "黃振銘", position: "委員" }
          ]
        },
        {
          title: "教育委員會",
          list: [
            { name: "陳沂名", position: "主委" },
            { name: "蔡宜廷", position: "副主委" },
            { name: "賴韋良", position: "委員" },
            { name: "張睿智", position: "委員" },
            { name: "陳柏霖", position: "委員" }
          ]
        },
        {
          title: "研究委員會",
          list: [
            { name: "林致源", position: "主委" },
            { name: "許俊傑", position: "副主委" },
            { name: "柯宏彥", position: "委員" },
            { name: "陳紹緯", position: "委員" },
            { name: "賴昭翰", position: "委員" }
          ]
        },
        {
          title: "公共事務委員會",
          list: [
            { name: "劉國聖", position: "主委" },
            { name: "黃耀廣", position: "副主委" },
            { name: "蔡宗霖", position: "委員" },
            { name: "李秋陽", position: "委員" },
            { name: "蘇大維", position: "委員" }
          ]
        },
        {
          title: "甄審委員會",
          list: [
            { name: "詹志洋", position: "主委" },
            { name: "林寶彥", position: "副主委" },
            { name: "顏旭霆", position: "委員" },
            { name: "蔡孝恩", position: "委員" },
            { name: "陳懷民", position: "委員" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.組織名單 {
  &__b93efead07ab4f5783b42d8d1ebad4dc {
    font-size: 15px;
    color: #121a33;
  }
}

.v-btn:before {
  background-color: transparent !important;
}
</style>
