import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  dest: 'dist',
  
  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
    'vuepress-theme-hope': path.resolve(__dirname, 'node_modules/vuepress-theme-hope/lib'),
  },
  
  plugins:[
    searchProPlugin({
      autoSuggestions: true,
      indexContent: false
    })
  ],
  theme,
 
  // Enable it with pwa
  // shouldPrefetch: false,
});
