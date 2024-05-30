<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavCategories from './NavCategories.vue'
</script>
<template>
  <nav>
    <div class="shopLogoContainer">
      <img class="shopLogo" src="/navBarIcons/onlineShopLogo.png" />
    </div>
    <div class="searchBarContainer">
      <input class="searchBar" type="text" placeholder="Search..." /><button class="searchButton">
        <img class="magnifyIcon" src="/navBarIcons/magnifyIcon.svg" />
      </button>
    </div>
    <div class="utilitiesContainer">
      <div class="utilities">
        <img class="accountIcon" src="/navBarIcons/accountIcon.svg" />
        <h4>Account</h4>
      </div>
      <div class="utilities">
        <img class="favouriteIcon" src="/navBarIcons/favouriteIcon.svg" />
        <h4>Favourite</h4>
      </div>
      <div class="utilities">
        <img class="cartIcon" src="/navBarIcons/cartIcon.svg" />
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
  justify-content: space-around;
  background-color: #f1fff3;
}
.shopLogoContainer,
.searchBarContainer,
.utilitiesContainer {
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
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
  border: 1.5px solid black;
  border-radius: 3px;
  background-color: #f1fff3;
  font-size: large;
}
.searchButton {
  display: flex;
  height: 60%;
  width: 10%;
  margin-left: 2px;
  border: 1.5px solid black;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: #f1fff3;
}
.magnifyIcon {
  height: 80%;
}
.utilitiesContainer,
.shopLogoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}
.utilities {
  height: 90%;
  margin: 7%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
}
.accountIcon,
.favouriteIcon,
.cartIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
}
</style>
