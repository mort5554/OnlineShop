<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavCategories from './NavCategories.vue'
</script>
<template>
  <nav>
    <div class="shopLogoContainer center">
      <img class="shopLogo" src="/navBarIcons/onlineShopLogo.png" />
    </div>
    <div class="searchBarContainer center">
      <input class="searchBar" type="text" placeholder="Search..." /><button class="searchButton">
        <img class="magnifyIcon" src="/navBarIcons/magnifyIcon.svg" />
      </button>
    </div>
    <div class="utilitiesContainer center">
      <div class="utilities">
        <img class="accountIcon center" src="/navBarIcons/accountIcon.svg" />
        <h4>Account</h4>
      </div>
      <div class="utilities">
        <img class="favouriteIcon center" src="/navBarIcons/favouriteIcon.svg" />
        <h4>Favourite</h4>
      </div>
      <div class="utilities">
        <img class="cartIcon center" src="/navBarIcons/cartIcon.svg" />
        <h4>Cart</h4>
      </div>
    </div>
  </nav>
  <NavCategories />
</template>
<style scoped>
nav {
  display: flex;
  width: 100vw;
  height: 100px;
  justify-content: space-between;
  background-color: var(--white);
}
.shopLogoContainer,
.searchBarContainer,
.utilitiesContainer {
  height: 90%;
}
.searchBarContainer {
  width: 40%;
}
.shopLogo {
  width: 45%;
}
.searchBar {
  height: 60%;
  width: 80%;
  padding-left: 1%;
  border: 1.5px solid var(--black);
  border-radius: 3px;
  background-color: var(--white);
  font-size: large;
}
.searchButton {
  height: 60%;
  width: 10%;
  margin-left: 2px;
  border: 1.5px solid var(--black);
  border-radius: 3px;
  background-color: var(--white);
  cursor: pointer;
}
.magnifyIcon {
  height: 80%;
}
.utilitiesContainer,
.shopLogoContainer {
  width: 20%;
}
.utilitiesContainer {
  gap: 30px;
  margin-right: 2%;
}
.utilities {
  height: 90%;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--black);
  border-radius: 3px;
  cursor: pointer;
}
.utilities h4 {
  font-family: FontSansRegular;
}
.accountIcon,
.favouriteIcon,
.cartIcon {
  height: 60%;
}
</style>
