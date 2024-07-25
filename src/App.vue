<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import '@/assets/fonts/GeneralSans-Variable.woff'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterSection />
</template>

<style>
* {
  font-family: GeneralSans;
  font-weight: 500;
}
:root {
  --black: #0a100c;
  --white: #f8fdf9;
  --greenPrimary: #2eda59;
  --greenSecondary: #8ef0a6;
  --whiteSecondary: #e8f8eb;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@font-face {
  font-family: GeneralSans;
  src: url('/src/assets/fonts/GeneralSans-Variable.ttf') format('opentype');
}
body {
  overflow-x: hidden;
}
</style>
