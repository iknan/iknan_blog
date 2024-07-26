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
          { text: "区块链实现", icon: "eos-icons:blockchain", link: "实现效果" },
          { text: "区块链编译和部署（测试链网络）", icon: "eos-icons:blockchain", link: "区块链编译和部署（测试链网络）" }
        ]
      }
    ]

  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/博文/",
    children: [
      {
        text: "程序员的自我修养",
        icon: "pen-to-square",
        prefix: "程序员的自我修养/",
        children: [
          { text: "塑料之爱", icon: "pen-to-square", link: "塑料之爱", },
          { text: "On Your Mark", icon: "pen-to-square", link: "On Your Mark", },

        ],
      },
    
    ],
  },
  {
    text: "Golang",
    icon: "devicon:go",
    prefix: "/posts/go相关笔记/",
    children: [
      {
        text: "数组与切片",
        icon: "lets-icons:array",
        link: "数组与切片"
      },
      {
        text: "Map",
        icon: "lets-icons:array",
        link: "Map"
      },
      {
        text: "Context上下文",
        icon: "lets-icons:array",
        link: "Context上下文"
      },
      {
        text: "并发入门",
        icon: "lets-icons:array",
        link: "并发入门"
      },
      {
        text: "并发进阶",
        icon: "lets-icons:array",
        link: "并发进阶"
      },
    
    ],
  },
]);
