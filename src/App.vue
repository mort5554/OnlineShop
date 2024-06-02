<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
:root {
  --black: #07140a;
  --white: #f6fcf7;
  --green: #35cd55;
  --lightgreen: #8ce8a0;
  --darkgreen: #6fc682;
  --seaweed: #2b4531;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@font-face {
  font-family: NotoSansBold;
  src: url('/src/assets/fonts/NotoSans-Bold.ttf') format('opentype');
}
@font-face {
  font-family: NotoSansRegular;
  src: url('/src/assets/fonts/NotoSans-Regular.ttf') format('opentype');
}
@font-face {
  font-family: WorkSansItalic;
  src: url('/src/assets/fonts/WorkSans-Italic.ttf') format('opentype');
}
@font-face {
  font-family: WorkSansRegular;
  src: url('/src/assets/fonts/WorkSans-Regular.ttf') format('opentype');
}
@font-face {
  font-family: HuangRegular;
  src: url('/src/assets/fonts/HuangRegular.ttf') format('opentype');
}
body {
  overflow-x: hidden;
}
</style>
