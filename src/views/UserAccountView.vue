<script setup>
import { RouterLink } from 'vue-router'
import { RouterView } from 'vue-router'
import FooterSection from '@/components/FooterSection.vue'
import NavBar from '@/components/NavBar.vue'
</script>
<template>
  <NavBar />
  <div class="userAccountContainer">
    <div class="accountUtilitiesContainerDesktop center">
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
          <RouterLink class="link" to="/Account/"
            ><h4 class="toolsDescription">Cart</h4></RouterLink
          >
          <RouterLink class="link" to="Orders"><h4 class="toolsDescription">Orders</h4></RouterLink>
          <RouterLink class="link" to="Favourites"
            ><h4 class="toolsDescription">Favourites</h4></RouterLink
          >
          <RouterLink class="link" to="ShippingInformations"
            ><h4 class="toolsDescription">Shipping Information</h4></RouterLink
          >
          <RouterLink class="link" to="Reviews"
            ><h4 class="toolsDescription">Reviews</h4></RouterLink
          >
        </div>
        <div class="counterContainer center">
          <h3 class="counter center">0</h3>
        </div>
      </div>
      <!---->
      <!--Setting-->
      <div class="settingsContainer">
        <div class="pageSettings center">
          <div class="support center">
            <img src="/userAccountIcons/supportIcon.svg" alt="Support Icon" />
            <h3>Support</h3>
          </div>
          <div class="settings center">
            <img src="/userAccountIcons/settingsIcon.svg" alt="Settings Icon" />
            <h3>Settings</h3>
          </div>
        </div>
        <div class="accountSettings center">
          <img src="/userAccountIcons/avatarIcon.svg" alt="User Avatar" />
          <div class="userInformationContainer center">
            <h3 class="username">Name Username</h3>
            <h3>email@electrohut.com</h3>
          </div>
          <img
            src="/userAccountIcons/userSettingsIcon.svg"
            class="userAccountSettings"
            alt="Settings Icon"
          />
        </div>
      </div>
    </div>
    <div class="accountUtilitiesContainerMobile center"></div>
    <div class="cartContainer center">
      <div class="cart">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
  <FooterSection />
</template>
<style scoped>
.userAccountContainer {
  width: 100vw;
  height: 800px;
  display: flex;
  background-color: var(--white);
}
@media (max-width: 544px) {
  .accountUtilitiesContainerDesktop {
    display: none;
  }
  .cartContainer {
    width: 90%;
  }
}
/* Left Side */
.accountUtilitiesContainerDesktop {
  display: flex; /*Tutaj */
  width: 23%;
  height: 100%;
  flex-direction: column;
  border-right: 1.5px solid var(--black);
}
/* Mobile */
.accountUtilitiesContainerMobile {
  width: 90vw;
  display: none;
  flex-direction: column;
}
.shopLogoContainer {
  width: 100%;
}
.shopLogo {
  width: 110px;
  margin-top: 15%;
}
@media (max-width: 920px) {
  .accountUtilitiesContainerDesktop {
    width: 35%;
  }
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
.toolIconsContainer img:hover {
  box-shadow:
    1px 1px 4px 1px rgba(0, 0, 0, 0.1) inset,
    -2px -2px 1px var(--white) inset;
  border-radius: 5px;
}
/* Tools Description */
.toolsDescriptionContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
}
.toolsDescription {
  width: fit-content;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: var(--black);
  text-decoration: none;
}
.link {
  text-decoration: none;
}
/* Counter */
.counterContainer {
  width: 20%;
  justify-content: flex-end;
}
.counter {
  width: 30px;
  border: 1px solid var(--black);
  border-radius: 40%;
  cursor: default;
}
@media (max-width: 580px) {
  .counterContainer {
    display: none;
  }
}

/* Setting */

.settingsContainer {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.pageSettings {
  width: 100%;
  height: 35%;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  gap: 15px;
}
.settings,
.support {
  display: flex;
  overflow: hidden;
  gap: 10px;
  margin-left: 15px;
  cursor: pointer;
}

/* Slide In Transition*/

.pageSettings h3,
.toolsDescriptionContainer h4 {
  position: relative;
}
.pageSettings h3::before,
.toolsDescriptionContainer h4::before {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}
.pageSettings h3:hover::before,
.toolsDescriptionContainer h4:hover::before {
  transform: scaleX(1);
}

/* */
.accountSettings {
  width: 100%;
  height: 25%;
  justify-content: flex-start;
}
.accountSettings img {
  cursor: pointer;
}
.userInformationContainer {
  width: 70%;
  flex-direction: column;
  margin-left: 15px;
}
.userInformationContainer h3 {
  display: flex;
  align-self: flex-start;
  font-size: 11px;
  cursor: pointer;
}
.username {
  font-weight: bold;
}
.userAccountSettings {
  padding: 9px;
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  .userAccountSettings {
    display: none;
  }
}
/* Right Side */
.cartContainer {
  width: 73%;
}
@media (max-width: 920px) {
  .cartContainer {
    width: 60%;
  }
}
.cart {
  height: 90%;
  width: 90%;
  border: 2px dashed grey;
  padding: 15px 20px;
}
</style>
