<script setup>
import ProductsCard from './ProductsCard.vue'
</script>
<template>
  <div class="discountsProductsContainer center">
    <div class="discountsProductsHeader center">
      <div class="greenLine"></div>
      <h4>PRODUCTS</h4>
      <h1>Products On Sale!</h1>
      <h3>Grab the best deals in our store</h3>
    </div>
    <div class="discountsProductsCardsContainer center">
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
    </div>
    <button class="buttonViewAll center">View all</button>
  </div>
</template>
<style scoped>
.discountsProductsContainer {
  width: 100vw;
  flex-direction: column;
  margin-top: 10%;
}
.discountsProductsHeader {
  width: 90%;
  height: fit-content;
  flex-direction: column;
  justify-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
}
.greenLine {
  width: 100%;
  height: 3px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: var(--greenSecondary);
}
.discountsProductsCardsContainer {
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6%;
  row-gap: 20px;
  margin-top: 20px;
}
.discountsProductsHeader h4,
h1 {
  font-weight: 700;
  color: black;
}
.discountsProductsHeader h1 {
  font-size: 60px;
}
.buttonViewAll {
  width: 122px;
  height: 55px;
  font-size: large;
  border-radius: 8px;
  margin-top: 40px;
  border: 1px solid var(--black);
  background-color: var(--white);
  cursor: pointer;
}
@media (max-width: 585px) {
  .discountsProductsHeader h1 {
    font-size: 45px;
  }
  .discountsProductsHeader h4 {
    font-size: 15px;
  }
}
</style>
