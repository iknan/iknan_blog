import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  dest: 'dist',
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "ik楠の空间",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/en/": {
      lang: 'en-US',
      title: 'iknanBlog',
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
 

  
  // Enable it with pwa
  // shouldPrefetch: false,
});
