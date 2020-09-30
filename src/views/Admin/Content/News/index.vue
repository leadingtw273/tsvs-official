<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
      <template v-slot:item.image="{ value }">
        <v-img class="ma-auto my-2" :src="value" width="200px" aspect-ratio="1.5" v-if="value !== ''"></v-img>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:item.isLogin="{ value }">
        {{ value ? "是" : "否" }}
      </template>

      <template v-slot:item.content="{ value }">
        <v-dialog max-width="75%" dark>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">預覽</v-btn>
          </template>

          <v-card>
            <v-card-title class="headline" primary-title>
              預覽
            </v-card-title>

            <v-card-text>
              <v-sheet class="secondary pa-12 black--text" style="border-radius: 40px;">
                <v-container>
                  <div v-html="value"></div>
                </v-container>
              </v-sheet>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>學會公告列表</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="dialog = true" large>新增</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="900px" dark>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>

        <v-card-text class="black--text">
          <v-row>
            <v-col cols="12" v-if="editedItem.image !== ''">
              <v-img class="ma-auto" :src="editedItem.image" width="70%" aspect-ratio="1.7"></v-img>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.image" label="圖片"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.class" label="類別"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-checkbox v-model="editedItem.isAdvertising" label="設為封面"></v-checkbox>
            </v-col>
            <v-col cols="3">
              <v-checkbox v-model="editedItem.isLogin" label="需登入"></v-checkbox>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.title" label="標題"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.date" label="時間"></v-text-field>
            </v-col>
            <v-col cols="12">
              <ckeditor :editor="editor" v-model="editedItem.content" :config="editorConfig"></ckeditor>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "News",
  data() {
    return {
      dialog: false,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          shouldNotGroupWhenFull: true
        }
      },
      headers: [
        { text: "類別", value: "class" },
        { text: "圖片", value: "image" },
        { text: "標題", value: "title" },
        { text: "日期", value: "date" },
        { text: "內容", value: "content", align: "center" },
        { text: "需登入", value: "isLogin" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [
        {
          class: "秘書處公告",
          image: "",
          title: "第八屆理監事暨學會幹部名單",
          date: "2019-12-17",
          content:
            '<div class="秘書處公告-2019-12-7-內容"><div class="秘書處公告-2019-12-7-內容__cbcf27669f044543949e95337ed33020"> 第八屆理監事暨學會幹部名單 <div class="d-flex mt-6"><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>甘宗旦</td><td>理事長</td></tr><tr><td>李芳艷</td><td>副理事長</td></tr><tr><td>陳益祥</td><td>副理事長</td></tr><tr><td>吳毅暉</td><td>常務理事</td></tr><tr><td>魏崢</td><td>常務理事</td></tr><tr><td>柯博仁</td><td>常務理事</td></tr><tr><td>張睿智</td><td>常務理事</td></tr><tr><td>李國楨</td><td>理事</td></tr></tbody></table></div></div><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>林致源</td><td>理事</td></tr><tr><td>張兼華</td><td>理事</td></tr><tr><td>陳沂名</td><td>理事</td></tr><tr><td>陳映澄</td><td>理事</td></tr><tr><td>陳哲伸</td><td>理事</td></tr><tr><td>黃耀廣</td><td>理事</td></tr><tr><td>詹志洋</td><td>理事</td></tr><tr><td>劉國聖</td><td>理事</td></tr></tbody></table></div></div><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>蔡宜廷</td><td>理事</td></tr><tr><td>鄭伯智</td><td>理事</td></tr><tr><td>謝世榮</td><td>理事</td></tr><tr><td>顏旭霆</td><td>理事</td></tr><tr><td>李中毅</td><td>理事</td></tr><tr><td>張忠毅</td><td>常務監事</td></tr><tr><td>李秋陽</td><td>監事</td></tr><tr><td>林暉翰</td><td>監事</td></tr></tbody></table></div></div><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>許傳智</td><td>監事</td></tr><tr><td>陳柏霖</td><td>監事</td></tr><tr><td>蔡忠霖</td><td>監事</td></tr><tr><td>羅健洺</td><td>監事</td></tr><tr><td>許喬博</td><td>秘書長</td></tr><tr><td>劉國聖</td><td>副秘書長</td></tr><tr><td>黃建偉</td><td>副秘書長</td></tr><tr><td>曾政哲</td><td>財務長</td></tr></tbody></table></div></div></div></div></div>',
          isAdvertising: false,
          isLogin: false
        },
        {
          class: "秘書處公告",
          image: "",
          title: "2019 血管外科專科醫師甄試 通過名單",
          date: "2019-09-02",
          content:
            '<div class="秘書處公告-2019-9-2-內容"><div class="秘書處公告-2019-9-2-內容__2d816ef2330144048cf6878c3d77e421"> 2019 血管外科專科醫師甄試 通過名單 <br><br>(依會員編號順序排列) <br><div class="d-flex mt-6"><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>S00622</td><td>吳欣岱</td><td>屏東醫院</td></tr><tr><td>S00638</td><td>林俊閔</td><td>台北馬偕</td></tr><tr><td>S00642</td><td>張瑞宗</td><td>三軍總醫院</td></tr><tr><td>S00643</td><td>林敬惟</td><td>三軍總醫院</td></tr><tr><td>S00650</td><td>陳迪詠</td><td>成大醫院</td></tr><tr><td>S00654</td><td>陳泰位</td><td>台北榮總</td></tr><tr><td>S00660</td><td>陳嘉葦</td><td>台北榮總</td></tr><tr><td>S00665</td><td>陳宇恒</td><td>台北馬偕</td></tr><tr><td>S00669</td><td>黃俊銘</td><td>安南醫院</td></tr><tr><td>S00673</td><td>吳崇丞</td><td>林口長庚</td></tr><tr><td>S00677</td><td>蘇以理</td><td>林口長庚</td></tr><tr><td>S00686</td><td>孟繁傑</td><td>台北榮總</td></tr><tr><td>S00689</td><td>文豪</td><td>成大醫院</td></tr></tbody></table></div></div></div><br>◎會員編號自動由Ａ→Ｓ <br><br>◎請9/5(四)前劃撥繳交專科醫師考試證書費：3000元 / 郵局劃撥帳號: 19944001 台灣血管外科學會 / 劃撥單上請註明(姓名/專科證書費) <br><br>◎收據上傳：email收據圖檔至4tsvs@tsvs.org，方完成繳費程序 <br><br>◎專科醫師證書將於2019/9/7(六) 11:40 會員大會頒發 (因事無法出席, 請由專人代領) </div></div>',
          isAdvertising: false,
          isLogin: false
        },
        {
          class: "秘書處公告",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-09-01",
          content:
            '<div class="秘書處公告-2019-9-1-內容"><div class="秘書處公告-2019-9-1-內容__7bf59c8eeef446f0a2d8ce2d5b664552"> 血管外科健保申報共識 <br><br>檔案載點 (需登入) </div></div>',
          isAdvertising: false,
          isLogin: true
        },
        {
          class: "醫學新知",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-10-18",
          content:
            '<div class="醫學新知-2018-6-24-內容"><div class="醫學新知-2018-6-24-內容__8947ef70c77a469186d430d94ceed76a"> AAA病人接受EVAR出現Postimplantation syndrome對預後的影響 <br><br>檔案載點 <br><br>Prospective evaluation of postimplantation syndrome evolution on patient outcomes after endovascular aneurysm repair for abdominal aortic aneurysm <br>J Vasc Surg. 2016 May;63(5):1248-55 <br>門諾醫院 黃振銘醫師整理 </div></div>',
          isAdvertising: false,
          isLogin: false
        },
        {
          class: "醫學新知",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-10-17",
          content:
            '<div class="醫學新知-2018-4-3-內容"><div class="醫學新知-2018-4-3-內容__e352205fd5a4426ab5bf73d40a158e0f"> Hybrid Endovascular Approach for Aberrant Subclavian Arterial Aneurysm <br><br>檔案載點 <br><br>A 10-year Experience Using a Hybrid Endovascular Approach to Treat Aberrant Subclavian Arterial Aneurysms[1] <br>Mathew Wooster et al., Ann Vasc Surg 2018; 46: 60–64 <br>花蓮慈濟 鄭伊佐醫師整理 </div></div>',
          isAdvertising: false,
          isLogin: false
        }
      ],
      editedIndex: -1,
      editedItem: {
        class: "",
        image: "",
        title: "",
        date: "",
        content: "",
        isAdvertising: false,
        isLogin: false
      },
      defaultItem: {
        class: "",
        image: "",
        title: "",
        date: "",
        content: "",
        isAdvertising: false,
        isLogin: false
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新增" : "編輯";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("確定刪除這筆資料？") && this.items.splice(index, 1);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style></style>
