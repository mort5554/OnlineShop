<template>
  <div class="bestsellersProductsContainer center">
    <div class="bestsellersHeader">
      <div class="greenLine"></div>
      <div class="headerSplit">
        <div class="leftSideCard">
          <h4>PRODUCTS</h4>
          <h1>Bestsellers</h1>
          <h3>Discover our bestselling products</h3>
        </div>
        <div class="rightSideCard">
          <button class="buttonViewAllBestsellers center">View all</button>
        </div>
      </div>
    </div>
    <!---->
    <div class="productsCardContainer">
      <div class="productCard">
        <img src="/public/navBarIcons/keyboard.jpg" alt="Product Card Img" />
        <div class="bottomSideCard">
          <div class="leftSideCard">
            <h2>Product name</h2>
            <h4>Variant</h4>
            <h1>$55</h1>
          </div>
          <div class="rightSideCard"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Many Times Used*/
.bottomSideCard,
.headerSplit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.leftSideCard,
.rightSideCard {
  width: 50%;
  display: flex;
  flex-direction: column;
}
/* Bestsellers Header*/
.bestsellersProductsContainer {
  height: 950px;
  width: 100vw;
  flex-direction: column;
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
  bottom: 6%;
  border: 1px solid var(--black);
  background-color: var(--white);
}
/* Bestsellers Products */
.productsCardContainer {
  width: 90%;
  height: 504px;
  padding-top: 40px;
}
.productCard {
  width: 304px;
  height: 408px;
}
.productCard img {
  width: 100%;
  height: 304px;
}
</style>
