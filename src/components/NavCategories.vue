<script setup></script>
<template>
  <div class="categoriesContainer">
    <div class="category laptopsCategory">
      <h2>Laptops</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category computersCategory">
      <h2>Computers</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category computerComponentsCategory">
      <h2>Computer Components</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
    <div class="category accessoriesCategory">
      <h2>Accessories</h2>
      <img class="arrowIcon" src="/public/navBarIcons/arrowLeftIcon.svg" />
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: 'ZCOOL QingKe HuangYou';
}
.categoriesContainer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  width: 100vw;
  background-color: #2b4531;
}
.category {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 23%;
  color: white;
}
.arrowIcon {
  height: 32%;
  padding-left: 2%;
}
</style>
