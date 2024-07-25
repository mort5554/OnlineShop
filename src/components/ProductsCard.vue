<template>
  <div class="productCard">
    <img class="productCardIcon" src="/navBarIcons/keyboard.jpg" alt="Product Card Img" />
    <div class="bottomSideCard">
      <div class="leftSideCard">
        <h2>Product name</h2>
        <h4>Variant</h4>
        <h1>$55</h1>
      </div>
      <div class="rightSideCard">
        <img
          class="favouriteIcon showIcon"
          src="/public/userAccountIcons/favouriteIcon.svg"
          alt="favouriteIcon"
        />
        <img class="cartAddIcon showIcon" src="/mainPageIcons/cartAddIcon.svg" alt="Add To Cart" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.productCard {
  width: 304px;
  height: 408px;
}
.bottomSideCard {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
}
.leftSideCard,
.rightSideCard {
  display: flex;
  flex-direction: column;
}
.leftSideCard {
  width: 70%;
}
.rightSideCard {
  width: 30%;
  flex-direction: row;
  justify-content: flex-end;
  gap: 7%;
}
.productCardIcon {
  width: 100%;
  height: 304px;
  border-radius: 16px;
  cursor: pointer;
}
.rightSideCard img {
  height: 32px;
  width: 32px;
  display: flex;
  align-self: flex-end;
  cursor: pointer;
}
.cartAddIcon {
  border: 1px solid var(--greenPrimary);
  border-radius: 5px;
  padding: 3px;
}
.leftSideCard h2,
h1 {
  font-weight: 700;
  color: black;
  font-size: 20px;
  cursor: pointer;
}
.showIcon {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.productCard:hover .showIcon {
  opacity: 1;
}
</style>
