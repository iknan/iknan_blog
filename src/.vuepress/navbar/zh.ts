import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "随堂笔记",
    icon: "tabler:brand-carbon",
    prefix: "/posts/class_notes/",
    children: [
      {
        text: "操作系统",
        icon: "vscode-icons:file-type-vueconfig",
        prefix: "操作系统/",
        children: [
          { text: "操作系统总结", icon: "bx:windows", link: "操作系统" }
        ]
      },
      {
        text: "计算机网络",
        icon: "zondicons:network",
        prefix: "计算机网络/",
        children: [
          { text: "计算机网络总结", icon: "iconoir:network-reverse", link: "计算机网络" }
        ]
      },
      {
        text: "数据库",
        icon: "vscode-icons:file-type-vueconfig",
        children: []
      },
      {
        text: "Linux",
        icon: "bx:windows",
        children: []
      }
    ]
  },
  
  {
    text: "技术专栏",
    icon: "tabler:brand-carbon",
    prefix: "/posts/Tech_Column/",
    children: [
      {
        text: "vue的安装与配置",
        icon: "vscode-icons:file-type-vueconfig",
        link: "vue的安装与配置"
      },
      {
        text: "vuepress的自动部署",
        icon: "vscode-icons:file-type-vueconfig",
        link: "vuepress的自动部署"
      }
    ]

  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
