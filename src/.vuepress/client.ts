import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"
import "vuepress-theme-hope/presets/hide-navbar-icon.scss"
import "vuepress-theme-hope/presets/bounce-icon.scss"
import "vuepress-theme-hope/presets/hr-driving-car.scss"
export default defineClientConfig({
  setup() {
    setupSnowFall();
    setupTransparentNavbar({ type: "homepage" });
  },
});