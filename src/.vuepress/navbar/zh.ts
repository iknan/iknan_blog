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
        prefix: "Linux/",
        children: [
          { text: "Linux操作系统提纲", icon: "bx:windows", link: "Linux操作系统提纲" }
        ]
      }
    ]
  },
  
  {
    text: "技术专栏",
    icon: "tabler:brand-carbon",
    prefix: "/posts/技术文档/",
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
      },
      {
        text: "区块链",
        icon:" eos-icons:blockchain",
        prefix: "区块链/",
        children: [
          { text: "区块链介绍", icon: "eos-icons:blockchain", link: "介绍" },
          { text: "区块链配置", icon: "eos-icons:blockchain", link: "配置" },
          { text: "区块链操作步骤", icon: "eos-icons:blockchain", link: "指南" },
          { text: "区块链实现", icon: "eos-icons:blockchain", link: "实现效果" }
        ]
      }
    ]

  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/博文/",
    children: [
      {
        text: "程序员的自我修养",
        icon: "pen-to-square",
        prefix: "程序员的自我修养/",
        children: [
          { text: "塑料之爱", icon: "pen-to-square", link: "塑料之爱" },
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
