import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
import "vuepress-theme-hope/presets/left-blog-info.scss"
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"
import "vuepress-theme-hope/presets/bounce-icon.scss"
import "vuepress-theme-hope/presets/hr-driving-car.scss"
export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
    setupSnowFall();
  },
});