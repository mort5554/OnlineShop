<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="categoriesContainer center">
    <div class="category laptopsCategory center">
      <RouterLink to="/Laptops" class="link"><h4>Laptops</h4></RouterLink>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category computersCategory center">
      <RouterLink to="/Computers" class="link"
        ><h4 class="computersDesktop">Pre-built Computers</h4></RouterLink
      >
      <RouterLink to="/Computers" class="link"
        ><h4 class="computersMobile">Computers</h4></RouterLink
      >
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category computerComponentsCategory center">
      <RouterLink to="/Components" class="link"
        ><h4 class="computerComponentsDesktop">Computer Components</h4></RouterLink
      >
      <RouterLink to="/Components" class="link"
        ><h4 class="computerComponentsMobile">Components</h4></RouterLink
      >
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category accessoriesCategory center">
      <RouterLink to="/Accessories" class="link"
        ><h4 class="externalHardwareDesktop">External Hardware</h4></RouterLink
      >
      <RouterLink to="/Accessories" class="link"
        ><h4 class="externalHardwareMobile">Accessories</h4></RouterLink
      >
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
  </div>
</template>
<style scoped>
.categoriesContainer {
  justify-content: space-around;
  height: 60px;
  width: 100vw;
  background-color: var(--black);
}
.category {
  height: 90%;
  width: 23%;
  color: var(--white);
}
.category h4 {
  font-size: 20px;
  cursor: pointer;
}
.arrowIcon {
  height: 32%;
  padding-left: 2%;
}
.link {
  text-decoration: none;
  color: var(--white);
}
.computerComponentsMobile,
.computersMobile,
.externalHardwareMobile {
  display: none;
}
.category h4:hover {
  box-shadow:
    1px 1px 4px 1px rgba(150, 149, 149, 0.2) inset,
    -1px -1px 1px var(--greenSecondary) inset;
  border-radius: 5px;
}
@media (max-width: 458px) {
  .arrowIcon {
    display: none;
  }
}
@media (max-width: 632px) {
  .category h4 {
    font-size: 100%;
  }
}
@media (max-width: 876px) {
  .externalHardwareMobile {
    display: flex;
  }
  .externalHardwareDesktop {
    display: none;
  }
  .arrowIcon {
    height: 28%;
  }
}
@media (max-width: 965px) {
  .computersDesktop {
    display: none;
  }
  .computersMobile {
    display: flex;
  }
}
@media (max-width: 1072px) {
  .computerComponentsDesktop {
    display: none;
  }
  .computerComponentsMobile {
    display: flex;
  }
}
</style>
