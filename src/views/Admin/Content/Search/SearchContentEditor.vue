<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-6 px-12">
      <v-btn class="mb-6" color="primary" large>Save</v-btn>
      <ckeditor :editor="editor" v-model="editedData"></ckeditor>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TheTagGroup from "../../../../components/TheTagGroup";

export default {
  name: "SearchContentEditor",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "手術準則", tag: "#手術準則" },
        { text: "參考資料", tag: "#參考資料" },
        { text: "訓練醫院", tag: "#訓練醫院" },
        { text: "衛福部資訊", tag: "#衛福部資訊" },
        { text: "學術教育資源", tag: "#學術教育資源" }
      ],
      editor: ClassicEditor
    };
  },
  computed: {
    editedData() {
      switch (this.contentItemIndex) {
        case 0:
          return '<div class="手術準則與參考標準-手術準則內容"><div class="手術準則與參考標準-手術準則內容__a8d98fcb34f64f60bb20825b05a198d3"> Global Vascular Guidelines for patients with chronic limb-threatening ischemia <br><br>J Vasc Surg 2019;69(6 Suppl) <br><br>The Society for Vascular Surgery practice guidelines on follow-up after vascular surgery arterial procedures <br><br>J Vasc Surg 2018;68:1 <br><br>Abstract Although follow-up after open surgical and endovascular procedures is generally regarded as an important part of the care provided by vascular surgeons, there are no detailed or comprehensive guidelines that specify the optimal approaches with regard to testing methods, indications for reintervention, and follow-up intervals. To provide guidance to the vascular surgeon, the Clinical Practice Council of the Society for Vascular Surgery appointed an expert panel and a methodologist to review the current clinical evidence and to develop recommendations for follow-up after vascular surgery procedures. For those procedures for which high-quality evidence was not available, recommendations were based on observational studies, committee consensus, and indirect evidence. Recognizing that there are numerous published reports on the role of duplex ultrasound for surveillance of infrainguinal vein bypass grafts, the Society commissioned a systematic review and meta-analysis on this topic. <br><br>The panel classified the strength of each recommendation and the corresponding quality of evidence on the basis of the Grading of Recommendations Assessment, Development, and Evaluation (GRADE) system: recommendations were graded either strong or weak, and the quality of evidence was graded high, moderate, or low. The resulting recommendations represent a wide variety of open surgical and endovascular procedures involving the extracranial carotid artery, thoracic and abdominal aorta, mesenteric and renal arteries, and lower extremity arterial revascularization. The panel also identified many areas in which there was a lack of high-quality evidence to support their recommendations. This suggests that there are opportunities for further clinical research on testing methods, threshold criteria, and the role of surveillance as well as on the modes of failure and indications for reintervention after vascular surgery procedures. </div></div>';
        case 1:
          return '<div class="手術準則與參考標準-參考資料內容"><div class="手術準則與參考標準-參考資料內容__f82593d92a69425b93383c46fb2c79d3"> Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome <br><br>J Vasc Surg. 2016 Sep;64(3):e23–e35. </div></div>';
        case 2:
          return '<div class="訓練醫院內容"><div class="訓練醫院內容__2ec4fd8561cc443ca509789bd7eba3b2 mb-6"> 108年度血管外科專科醫師訓練醫院認定合格醫院名單 </div><div class="訓練醫院內容__e0e82287de6a4e18bee405f16b92c7a5"> 2019/03/15理監事會議新增彰化基督教醫院, 共計29間醫院 / 102年度起，專科醫師甄試若所屬醫院不在訓練醫院合格名單，則不具備考試資格 <br><div class="d-flex mt-6"><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>三軍總醫院</td></tr><tr><td>大林慈濟醫院</td></tr><tr><td>中山醫學大學附設醫院</td></tr><tr><td>台大醫院</td></tr><tr><td>台大新竹醫院</td></tr><tr><td>台中慈濟醫院</td></tr><tr><td>台中榮民總醫院</td></tr><tr><td>台北市立聯合醫院仁愛院區</td></tr><tr><td>台北慈濟醫院</td></tr><tr><td>台北榮民總醫院</td></tr><tr><td>台北醫學大學附設醫院</td></tr><tr><td>成大醫院</td></tr><tr><td>亞東醫院</td></tr><tr><td>林口長庚醫院</td></tr><tr><td>花蓮慈濟醫院</td></tr><tr><td>振興醫院</td></tr><tr><td>馬偕醫院</td></tr><tr><td>高雄長庚醫院</td></tr><tr><td>高雄榮民總醫院</td></tr><tr><td>高雄醫學大學附設中和醫院</td></tr><tr><td>國軍高雄總醫院</td></tr><tr><td>基隆長庚醫院</td></tr><tr><td>童綜合醫院</td></tr><tr><td>新光醫院</td></tr><tr><td>萬芳醫院</td></tr><tr><td>嘉義長庚醫院</td></tr><tr><td>嘉義基督教醫院</td></tr><tr><td>彰化基督教醫院(108年新增認定)</td></tr><tr><td>雙和醫院</td></tr></tbody></table></div></div></div><br>———————————————————————————————————— <br>彰化秀傳紀念醫院(107年度無專科指導醫師取消訓練醫院資格) <br>臺中醫院 (103年新增認定)(107年度無專科指導醫師取消訓練醫院資格) </div></div>';
        case 3:
          return '<div class="衛福部資訊內容"><div class="衛福部資訊內容__0497399d91f141c6aefd225d39503cc4 mb-6">健保血管特材給付規定(適應症/分類碼)</div><div class="衛福部資訊內容__c79463cc70444a83b3693c2b3b7198a3"> 分類碼 品名表 <br>A220-1 頸動脈支架 CAROTID STENT <br>A220-2 腸骨動脈血管支架 <br>A220-3 腹主動脈瘤支架 <br>A220-4 淺股動脈血管支架 <br>A220-5 血管治療導管(下肢) <br>A220-6 胸主動脈支架系統 <br>A220-7 藥物釋放型冠狀動脈氣球導管 <br>A220-8 腎動脈血管支架系統之給付規定 <br>A220-9 周邊血管支架(含人工血管)之給付規定 <br>A220-10 開窗型客製化腹主動脈瘤支架 <br>A220-11 周邊動脈血管支架及傳輸裝置(球擴式覆膜支架) <br>A216-8 高壓注射式 PORT-A NEEDLE <br>B301-4 血栓濾過導引線系統 <br>B301-5 周邊動脈血栓移除系統組 </div></div>';
        case 4:
          return '<div class="d-flex flex-column"><span class="mb-6">手術例數申報表</span><span class="mb-6 accent--text">點此下載 : Excel_手術例數申報表</span><span class="mb-6">手術例數申報表_使用介紹</span><span class="mb-6 accent--text">點此下載 : PDF_手術例數申報表 使用介紹</span></div>';
        default:
          return "N/A";
      }
    }
  }
};
</script>

<style></style>
