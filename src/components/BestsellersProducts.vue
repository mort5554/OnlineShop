<script setup>
import ProductsCard from './ProductsCard.vue'
</script>
<template>
  <div class="bestsellersProductsContainer center">
    <div class="bestsellersHeader">
      <div class="greenLine"></div>
      <div class="headerSplit">
        <div class="leftSideHeader">
          <h4>PRODUCTS</h4>
          <h1>Bestsellers</h1>
          <h3>Discover our bestselling products</h3>
        </div>
        <div class="rightSideHeader">
          <button class="buttonViewAllBestsellers center">View all</button>
        </div>
      </div>
    </div>
    <!---->
    <div class="productsCardContainer center">
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
    </div>
    <div class="slideProductsCardsContainer center">
      <div class="sliderDotsContainer center">
        <div class="sliderDots selectedLocation"></div>
        <div class="sliderDots"></div>
        <div class="sliderDots"></div>
        <div class="sliderDots"></div>
        <div class="sliderDots"></div>
      </div>
      <div class="slideButtonsContainer center">
        <img
          class="slideButtonLeft"
          src="/mainPageIcons/slideButtonIcon.svg"
          alt="slideButtonIcon"
        />
        <img
          class="slideButtonRight"
          src="/mainPageIcons/slideButtonIcon.svg"
          alt="slideButtonIcon"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Bestsellers Header*/
.bestsellersProductsContainer {
  width: 100vw;
  flex-direction: column;
  margin-top: 12%;
}
.bestsellersHeader {
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.greenLine {
  width: 100%;
  height: 3px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: var(--greenSecondary);
}
.headerSplit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.leftSideHeader,
.rightSideHeader {
  width: 50%;
  height: 104px;
  display: flex;
  flex-direction: column;
}
.bestsellersHeader h4,
h1 {
  font-weight: 700;
  color: black;
  font-size: 16px;
}
.bestsellersHeader h1 {
  font-size: 50px;
}
.buttonViewAllBestsellers {
  position: absolute;
  width: 102px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-self: flex-end;
  border-radius: 8px;
  bottom: 50px;
  border: 1px solid var(--black);
  background-color: var(--white);
  cursor: pointer;
  bottom: -10%;
}
/* Bestsellers Products */
.productsCardContainer {
  width: 90%;
  padding-top: 40px;
  gap: 5%;
  flex-wrap: wrap;
}
/* slide Products Cards */
.slideProductsCardsContainer {
  width: 90%;
  height: 48px;
  justify-content: space-between;
}
.sliderDotsContainer {
  width: 50%;
  justify-content: flex-start;
  gap: 2%;
}
.sliderDots {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #cccccc;
}
.selectedLocation {
  background-color: var(--black);
}
.slideButtonsContainer {
  width: 50%;
  justify-content: flex-end;
  gap: 2%;
}
.slideButtonRight {
  rotate: 180deg;
}
</style>
