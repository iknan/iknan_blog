import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import searchPlugin from "@vuepress/plugin-search";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  dest: 'dist',
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "明の空间",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/en/": {
      lang: 'en-US',
      title: 'MingBlog',
      description: 'Your Site Description',
    },
  },
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  theme,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),

  ],
  
  // Enable it with pwa
  // shouldPrefetch: false,
});
