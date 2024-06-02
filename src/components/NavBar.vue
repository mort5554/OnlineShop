<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavCategories from './NavCategories.vue'
</script>
<template>
  <nav>
    <div class="shopLogoContainer center">
      <img class="shopLogo" src="/navBarIcons/onlineShopLogo.png" />
    </div>
    <div class="searchBarContainerDesktop center">
      <input class="searchBar" type="text" placeholder="Search..." /><button class="searchButton">
        <img class="magnifyIcon" src="/navBarIcons/magnifyIcon.svg" />
      </button>
    </div>
    <div class="utilitiesContainer center">
      <div class="utilities">
        <img src="/navBarIcons/accountIcon.svg" />
        <h4>Account</h4>
      </div>
      <div class="utilities">
        <img src="/navBarIcons/favouriteIcon.svg" />
        <h4>Favourite</h4>
      </div>
      <div class="utilities">
        <img src="/navBarIcons/cartIcon.svg" />
        <h4>Cart</h4>
      </div>
    </div>
  </nav>
  <div class="searchBarContainerMobile center">
    <input class="searchBar" type="text" placeholder="Search..." /><button
      class="searchButton center"
    >
      <img class="magnifyIcon" src="/navBarIcons/magnifyIcon.svg" />
    </button>
  </div>
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
.searchBarContainerDesktop,
.utilitiesContainer,
.searchBarContainerMobile {
  height: 90%;
}
.searchBarContainerMobile {
  display: none;
  height: 70px;
  background-color: var(--white);
}
.searchBarContainerDesktop {
  width: 30%;
}
@media (max-width: 1150px) {
  .searchBarContainerDesktop {
    width: 40%;
  }
  nav {
    justify-content: space-around;
  }
  .searchButton {
    display: none;
  }
  .utilities img {
    height: 20px;
  }
}
@media (max-width: 740px) {
  .searchBarContainerDesktop {
    display: none;
  }
  .searchBarContainerMobile {
    display: flex;
  }
  .searchButton {
    display: flex;
  }
}
@media (max-width: 450px) {
  nav > .shopLogoContainer {
    width: 10px;
  }
  .utilities h4 {
    font-size: 13px;
  }
  .utilities img {
    width: 40px;
  }
}
.shopLogo {
  height: 100%;
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
  width: 12%;
  margin-left: 2px;
  border: 1.5px solid var(--black);
  border-radius: 3px;
  background-color: var(--white);
  cursor: pointer;
}
.magnifyIcon {
  height: fit-content;
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
  height: 76px;
  width: 70%;
  max-width: 76px;
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
.utilities img {
  height: 60%;
}
</style>
