<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/modules/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <BlogHero>
    <template #bg>
      <BingHeroBackground />
      <HitokotoBlogHero v-bind="info" />
    </template>
  </BlogHero>
</template>
