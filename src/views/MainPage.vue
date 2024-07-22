<script setup>
import Header from '../components/Header.vue'
import BestsellersProducts from '../components/BestsellersProducts.vue'
import DiscountsProducts from '../components/DiscountsProducts.vue'
import FAQsSection from '../components/FAQsSection.vue'
</script>
<template>
  <main>
    <Header />
    <BestsellersProducts />
    <DiscountsProducts />
    <FAQsSection />
  </main>
</template>
<style scoped>
main {
  background-color: var(--white);
}
</style>
