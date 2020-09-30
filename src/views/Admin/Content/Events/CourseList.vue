<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
      <template v-slot:item.image="{ value }">
        <v-img class="ma-auto my-2" :src="value" width="200px" aspect-ratio="1.5" v-if="value !== ''"></v-img>
      </template>

      <template v-slot:item.image="{ value }">
        <v-img class="ma-auto my-2" :src="value" width="200px" aspect-ratio="1.5"></v-img>
      </template>

      <template v-slot:item.type="{ value }">
        {{ value === 1 ? "公告活動資訊" : "繼續教育積分" }}
      </template>

      <template v-slot:item.notice="{}">
        <v-btn color="primary" class="ma-1" @click.stop="sendSuccessDialog = true" small>發送通知</v-btn>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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
          <v-toolbar-title>活動清單</v-toolbar-title>
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
              <v-text-field v-model="editedItem.title" label="標題"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.date" label="課程日期"></v-text-field>
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

    <v-dialog v-model="sendSuccessDialog" width="400">
      <v-card dark>
        <v-card-text class="d-flex flex-column align-center pa-6">
          <v-icon color="success" size="150">mdi-check-circle-outline</v-icon>
          <span class="white--text text-h6">訊息發送成功</span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click.stop="sendSuccessDialog = false">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "CourseList",
  data() {
    return {
      sendSuccessDialog: false,
      dialog: false,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          shouldNotGroupWhenFull: true
        }
      },
      headers: [
        { text: "申請類別", value: "type" },
        { text: "圖片", value: "image" },
        { text: "標題", value: "title" },
        { text: "課程日期", value: "date" },
        { text: "內容", value: "content", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
        { text: "Notice", value: "notice", sortable: false }
      ],
      items: [
        {
          type: 1,
          image: "https://www.tsvs.org/upload/Image/20200419%20Banner.jpg",
          title: "【TSVS線上活動】4/19(日) 9-12AM 縱貫海峽—海峽兩岸血管外科高峰論壇",
          date: "2020-04-19",
          content: `<div><p class="MsoNormal" style="margin-top:12.0pt;mso-para-margin-top:1.0gd;
            layout-grid-mode:char;mso-layout-grid-align:none"><span style="font-size:14.0pt;
            font-family:DFKai-SB;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:
            &quot;Times New Roman&quot;">活動名稱</span><span lang="EN-US" style="font-size:14.0pt;
            mso-fareast-font-family:DFKai-SB">: </span><span style="font-size:14.0pt;
            font-family:DFKai-SB;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:
            &quot;Times New Roman&quot;">縱貫海峽—海峽兩岸血管外科高峰論壇</span></p>
            <p class="MsoNormal" style="margin-top:12.0pt;mso-para-margin-top:1.0gd;
            layout-grid-mode:char;mso-layout-grid-align:none"><span style="font-size: 14pt; font-family: DFKai-SB;">活動日期</span><span lang="EN-US" style="font-size: 14pt; font-family: &quot;Times New Roman&quot;, serif;">: 109</span><span style="font-size: 14pt; font-family: DFKai-SB;">年</span><span lang="EN-US" style="font-size: 14pt; font-family: &quot;Times New Roman&quot;, serif;">4</span><span style="font-size: 14pt; font-family: DFKai-SB;">月</span><span lang="EN-US" style="font-size: 14pt; font-family: &quot;Times New Roman&quot;, serif;">19</span><span style="font-size: 14pt; font-family: DFKai-SB;">日</span></p>
            <span style="font-size:14.0pt;font-family:
            DFKai-SB;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;
            mso-bidi-font-family:&quot;Times New Roman&quot;;mso-font-kerning:1.0pt;mso-ansi-language:
            EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA"> 線上活動連結:</span><b style="font-family: &quot;microsoft jhenghei&quot;, sans-serif; font-size: small;">&nbsp;<a href="http://q129.itraining.tw/index.php" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://q129.itraining.tw/index.php&amp;source=gmail&amp;ust=1587024711227000&amp;usg=AFQjCNGyFjO0mHbYgt-U_9QkVZ1MLVRALQ" style="color: rgb(17, 85, 204);">http://q129.<wbr>itraining.tw/index.php</a>&nbsp;(無須安裝APP即可進入與會)</b><span style="font-size:14.0pt;font-family:
            DFKai-SB;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;
            mso-bidi-font-family:&quot;Times New Roman&quot;;mso-font-kerning:1.0pt;mso-ansi-language:
            EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA"><br>
            <br>
            活動議程與講師介紹可點上方連結查看或至下方連結下載<br>
            <br>
            <img src="https://www.tsvs.org/upload/Image/20200419%20Banner.jpg" width="640" height="167" alt=""><br>
            <br>
            <br type="_moz">
            </span></div>
            `
        },
        {
          type: 1,
          image: "",
          title: "【TSVS南區困難病例討論會】2020/06/13(六)下午2點, 歡迎報名參加~!",
          date: "2020-06-13",
          content: `<td>
            <span style="font-family: Arial;"><span style="font-size: large;">TSVS南區困難病例討論</span></span>
            <div><span style="font-family: Arial;"><span style="font-size: large;">時間: 2020/06/13(六)下午2點</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">地點: 悅誠廣場1樓 掌門精釀啤酒館</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">&nbsp; &nbsp; &nbsp; (高雄市三民區民族一路427號)</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">&nbsp; &nbsp; &nbsp; (高雄市民族 大順路交叉口 交通方便)</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">分享案例醫院:&nbsp;</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">輔英 屏基 高醫 長庚 成大 安南 嘉基 奇美 亞大</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;"><br>
            </span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">*TSVS積分: 15分</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">*會中有提供各式啤酒及小菜品嚐 會後有精緻晚餐</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;">*請於5/30前, 線上報名參加:</span></span></div>
            <div><span style="font-family: Arial;"><span style="font-size: large;"><a href="https://forms.gle/fR2zyaewnziFa9Uf9">https://forms.gle/fR2zyaewnziFa9Uf9</a></span></span></div>
            </td>
            `
        },
        {
          type: 1,
          image: "https://buzzorange.com/techorange/wp-content/uploads/sites/2/2019/04/doctor-1024x681.webp?jpeg",
          title: "人工智慧的醫療照護應用",
          subTitle: "小病就跑大醫院？減少醫療浪費",
          date: "2020-06-13",
          content: ""
        },
        {
          type: 1,
          image: "https://images.chinatimes.com/newsphoto/2020-02-13/900/N14A00_P_01_01.jpg",
          title: "人工智慧的醫療照護應用02",
          subTitle: "小病就跑大醫院？減少醫療浪費",
          date: "2020-06-13",
          content: ""
        },
        {
          type: 1,
          image: "https://cloudcdn.taiwantradeshows.com.tw/2019/medicare/edm/images/shutterstock.jpg",
          title: "人工智慧的醫療照護應用03",
          subTitle: "小病就跑大醫院？減少醫療浪費",
          date: "2020-06-13",
          content: ""
        }
      ],
      editedIndex: -1,
      editedItem: {
        image: "",
        title: "",
        date: "",
        content: ""
      },
      defaultItem: {
        image: "",
        title: "",
        date: "",
        content: ""
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
