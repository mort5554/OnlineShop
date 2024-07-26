<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'

import NavCategories from './NavCategories.vue'
</script>
<template>
  <nav>
    <div class="desktopView center">
      <div class="shopLogoContainer center">
        <RouterLink to="/">
          <img class="ElectroHut Logo" src="/onlineShopLogo.png" />
        </RouterLink>
      </div>
      <div class="searchBarContainerDesktop center">
        <div class="searchBar center">
          <img src="/navBarIcons/magnifyIcon.svg" class="magnifyIcon center" alt="magnifyIcon" />
          <input type="search" class="inputSearchBar" placeholder="Search" />
        </div>
      </div>
      <div class="utilitiesContainer center">
        <RouterLink class="link" to="/Account/">
          <div class="utilitie center">
            <img src="/public/navBarIcons/accountIcon.svg" alt="accountIcon" />
            <p>Account</p>
          </div>
        </RouterLink>
        <RouterLink class="link" to="/Account/Favourites">
          <div class="utilitie center">
            <img src="/public/navBarIcons/favouriteIcon.svg" alt="accountIcon" />
            <p>Favourite</p>
          </div>
        </RouterLink>
        <RouterLink class="link" to="/Account/">
          <div class="utilitie center">
            <img src="/public/navBarIcons/cartIcon.svg" alt="accountIcon" />
            <p>Cart</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="mobileView center">
      <div class="searchBarContainerMobile center">
        <div class="searchBar center">
          <img src="/navBarIcons/magnifyIcon.svg" class="magnifyIcon center" alt="magnifyIcon" />
          <input type="search" class="inputSearchBar" placeholder="Search" />
        </div>
      </div>
    </div>
  </nav>

  <NavCategories />
</template>
<style scoped>
nav {
  width: 100vw;
  height: 9%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--whiteSecondary);
}
.link {
  text-decoration: none;
  color: var(--black);
}
.desktopView {
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
}
.mobileView {
  display: none;
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
}
.shopLogoContainer {
  width: 20%;
  height: 100%;
}
.shopLogo {
  height: 70px;
  cursor: pointer;
}
.searchBarContainerDesktop {
  width: 40%;
  height: 100%;
}
.searchBarContainerMobile {
  width: 40%;
  height: 100%;
}
.searchBar {
  width: 100%;
  height: 42px;
  border: 1px solid var(--black);
  gap: 10px;
  padding: 10px;
  background-color: white;
}
.magnifyIcon {
  width: 20px;
  height: 20px;
}
.inputSearchBar {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: large;
}
.utilitiesContainer {
  width: 20%;
  height: 100%;
  gap: 6%;
}
.utilitie {
  flex-direction: column;
}
.utilitie img {
  width: 28px;
  height: 26px;
  cursor: pointer;
}
.utilitie p {
  cursor: pointer;
}
@media (max-width: 526px) {
  nav {
    height: 132px;
  }
  .utilitiesContainer {
    width: 40%;
    gap: 20px;
  }
  .searchBarContainerDesktop {
    display: none;
  }
  .mobileView {
    display: flex;
  }
  .searchBarContainerMobile {
    width: 60%;
  }
}
@media (max-width: 655px) {
  .shopLogoContainer {
    width: 10%;
  }
  .searchBarContainerDesktop {
    width: 35%;
  }
}
@media (max-width: 930px) {
  nav {
    justify-content: space-around;
  }
}
</style>
