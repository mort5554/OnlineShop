<script setup></script>
<template>
  <div class="categoriesContainer center">
    <div class="category laptopsCategory center">
      <h2>Laptops</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category computersCategory center">
      <h2>Computers</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category computerComponentsCategory center">
      <h2>Computer Components</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category accessoriesCategory center">
      <h2>Accessories</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
  </div>
</template>
<style scoped>
.categoriesContainer {
  justify-content: space-around;
  height: 70px;
  width: 100vw;
  background-color: #2b4531;
}
.category {
  height: 90%;
  width: 23%;
  color: var(--white);
  cursor: pointer;
}
.category h2 {
  font-family: HuangRegular;
  font-size: 29px;
}
.arrowIcon {
  height: 32%;
  padding-left: 2%;
}
</style>
