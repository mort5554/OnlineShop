<template>
  <div class="userAccountContainer">
    <div class="accountUtilitiesContainer center">
      <!--Tools-->
      <div class="shopLogoContainer">
        <img src="/public/logo.ico" class="shopLogo" alt="ElectroHut Logo" />
      </div>
      <div class="accountToolsContainer">
        <div class="toolIconsContainer">
          <img src="/userAccountIcons/cartIcon.svg" id="cartIcon" alt="Cart Icon" />
          <img src="/userAccountIcons/ordersIcon.svg" alt="Orders Icon" />
          <img src="/userAccountIcons/favouriteIcon.svg" id="favouriteIcon" alt="Favourite Icon" />
          <img src="/userAccountIcons/informationsIcon.svg" alt="Informations Icon" />
          <img src="/userAccountIcons/reviewsIcon.svg" alt="Reviews Icon" />
        </div>
        <div class="toolsDescriptionContainer">
          <div class="toolsDescription">Cart</div>
          <div class="toolsDescription">Orders</div>
          <div class="toolsDescription">Favourites</div>
          <div class="toolsDescription">Shipping Information</div>
          <div class="toolsDescription">Reviews</div>
        </div>
        <div class="counterContainer center">
          <h3 class="counter center">0</h3>
        </div>
      </div>
      <!---->
      <!--Setting-->
      <div class="settingsContainer">sd</div>
    </div>
    <div class="cartContainer center">
      <div class="cart"></div>
    </div>
  </div>
</template>
<style scoped>
.userAccountContainer {
  width: 100vw;
  height: 90vh;
  display: flex;
  background-color: var(--white);
}
/* Left Side */
.accountUtilitiesContainer {
  width: 23%;
  height: 100%;
  flex-direction: column;
  border-right: 1.5px solid black;
}
.shopLogoContainer {
  width: 100%;
}
.shopLogo {
  width: 110px;
}

/* Account Tools*/

.accountToolsContainer {
  width: 90%;
  display: flex;
  flex-direction: row;
}
.toolIconsContainer {
  display: flex;
  width: fit-content;
  flex-direction: column;
  padding: 24px;
  padding-right: 10px;
  gap: 17px;
}
.toolIconsContainer img {
  width: 30px;
  cursor: pointer;
}
#favouriteIcon {
  width: 40px;
  position: relative;
  left: -5px;
}
#cartIcon {
  width: 35px;
  position: relative;
  left: -4px;
}
.counterContainer {
  width: 20%;
  justify-content: flex-end;
}
.counter {
  width: 30px;
  border: 1px solid black;
  border-radius: 40%;
  cursor: default;
}
/* Tools Description */
.toolsDescriptionContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.toolsDescription {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.toolIconsContainer img:hover {
  box-shadow:
    1px 1px 4px 1px rgba(0, 0, 0, 0.1) inset,
    -2px -2px 1px white inset;
  border-radius: 5px;
}
/* Setting */
.settingsContainer {
  width: 90%;
  height: 350px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
/* Right Side */
.cartContainer {
  width: 73%;
}
.cart {
  height: 90%;
  width: 90%;
  border: 2px dashed grey;
}
</style>
