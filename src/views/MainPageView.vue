<script setup>
import Header from '../components/Header.vue'
import BestsellersProducts from '../components/BestsellersProducts.vue'
import DiscountsProducts from '../components/DiscountsProducts.vue'
import FAQsSection from '../components/FAQsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import NavBar from '@/components/NavBar.vue'
</script>
<template>
  <main>
    <NavBar />
    <Header />
    <BestsellersProducts />
    <DiscountsProducts />
    <FAQsSection />
    <FooterSection />
  </main>
</template>
<style scoped>
main {
  background-color: var(--white);
}
</style>
