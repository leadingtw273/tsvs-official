export default [
  {
    path: "一般設定",
    name: "AdminCommonSetting",
    component() {
      return import("@/views/Admin/CommonSetting");
    },
    children: [
      {
        path: "背景圖片",
        name: "AdminBackgroundImage",
        component() {
          return import("@/views/Admin/CommonSetting/BackgroundImage");
        }
      },
      {
        path: "首頁輪播",
        name: "AdminCarouselImage",
        component() {
          return import("@/views/Admin/CommonSetting/CarouselImage");
        }
      }
    ],
    redirect: { name: "AdminBackgroundImage" }
  },
  {
    path: "會員管理",
    name: "AdminMember",
    component() {
      return import("@/views/Admin/Member");
    },
    children: [
      {
        path: "會員列表",
        name: "AdminMemberList",
        component() {
          return import("@/views/Admin/Member/MemberList");
        }
      },
      {
        path: "會員審核",
        name: "AdminMemberApply",
        component() {
          return import("@/views/Admin/Member/MemberApply");
        }
      },
      {
        path: "積分申請",
        name: "AdminMemberQuantityApply",
        component() {
          return import("@/views/Admin/Member/QuantityApply");
        }
      }
    ],
    redirect: { name: "AdminMemberList" }
  },
  {
    path: "內容管理",
    name: "AdminContent",
    component() {
      return import("@/views/Admin/Content");
    },
    children: [
      {
        path: "學會資訊",
        name: "AdminAbout",
        component() {
          return import("@/views/Admin/Content/About");
        },
        children: [
          {
            path: "內容編輯",
            name: "AdminEditorContent",
            component() {
              return import("@/views/Admin/Content/About/EditorContent.vue");
            }
          },
          {
            path: "章程法令規章",
            name: "AdminBylawsRegulations",
            component() {
              return import("@/views/Admin/Content/About/BylawsRegulations.vue");
            }
          },
          {
            path: "會議記錄",
            name: "AdminMeetingRecord",
            component() {
              return import("@/views/Admin/Content/About/MeetingRecord.vue");
            }
          }
        ],
        redirect: { name: "AdminEditorContent" }
      },
      {
        path: "學會公告",
        name: "AdminNews",
        component() {
          return import("@/views/Admin/Content/News");
        }
      },
      {
        path: "活動管理",
        name: "AdminEvents",
        component() {
          return import("@/views/Admin/Content/Events");
        },
        children: [
          {
            path: "活動審核",
            name: "AdminCourseApplicationEditor",
            component() {
              return import("@/views/Admin/Content/Events/CourseApplicationEditor.vue");
            }
          },
          {
            path: "活動清單",
            name: "AdminCourseList",
            component() {
              return import("@/views/Admin/Content/Events/CourseList.vue");
            }
          }
        ],
        redirect: { name: "AdminCourseApplicationEditor" }
      },
      {
        path: "資料查詢",
        name: "AdminSearch",
        component() {
          return import("@/views/Admin/Content/Search");
        },
        children: [
          {
            path: "內容編輯",
            name: "AdminSearchContentEditor",
            component() {
              return import("@/views/Admin/Content/Search/SearchContentEditor");
            }
          },
          {
            path: "影片紀錄",
            name: "AdminRecord",
            component() {
              return import("@/views/Admin/Content/Search/Record");
            }
          },
          {
            path: "資料下載",
            name: "AdminDownload",
            component() {
              return import("@/views/Admin/Content/Search/Download");
            }
          }
        ],
        redirect: { name: "AdminSearchContentEditor" }
      },
      {
        path: "衛教專區",
        name: "AdminHealthEducation",
        component() {
          return import("@/views/Admin/Content/HealthEducation");
        }
      },
      {
        path: "相關網站",
        name: "AdminWebsitesLink",
        component() {
          return import("@/views/Admin/Content/WebsitesLink");
        }
      }
    ],
    redirect: { name: "AdminAbout" }
  }
];
