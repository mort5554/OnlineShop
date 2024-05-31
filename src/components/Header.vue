<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <header class="center">
    <div class="head center">
      <div class="left bluredGreenCircle"></div>
      <div class="right bluredGreenCircle"></div>
      <h1>
        <div class="topBorder">
          <div class="topBorder topBorder2"></div>
        </div>
        <span>MortShop</span>, Twoja Droga do Świata <br />
        Cyfrowej Rozrywki i Produktywności
      </h1>
      <h3>
        Odkryj naszą bogatą ofertę laptopów, komputerów <br />
        stacjonarnych, podzespołów i akcesoriów i skompletuj <br />
        swój wymarzony zestaw.
      </h3>
      <button class="searchButton" role="button">Przeglądaj</button>
    </div>
  </header>
</template>
<style scoped>
header {
  position: relative;
  height: 900px;
  overflow: none;
}
.head {
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;
  height: 90%;
  position: relative;
}
.left {
  top: 57%;
  left: -16%;
}
.right {
  top: 2%;
  right: -14%;
}
.topBorder {
  width: 100px;
  height: 100px;
  border-radius: 6px;
  position: absolute;
  top: 0%;
  left: 0%;
  border-top: 5px solid black;
  border-left: 5px solid black;
}
.topBorder2 {
  filter: blur(5px);
  top: -5px;
  left: -5px;
}
.bluredGreenCircle {
  height: 40%;
  width: 30%;
  background-color: var(--green);
  position: absolute;
  filter: blur(90px);
  border-radius: 50%;
}
.head h1 {
  font-family: NotoSansRegular;
  text-align: center;
  margin-top: 5%;
  font-size: 67px;
}
.head span {
  color: var(--darkgreen);
}
.head h3 {
  font-family: WorkSansRegular;
  text-align: center;
  margin-top: 3%;
  font-size: 28px;
}
.searchButton {
  display: inline-block;
  font-family: NotoSansBold;
  font-size: 28px;
  font-weight: 800;
  line-height: 2.5;
  margin-top: 2%;
  height: 78px;
  width: 244px;
  background: linear-gradient(to bottom right, var(--green), var(--darkgreen));
  border: 0;
  border-radius: 12px;
  color: var(--white);
  cursor: pointer;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}
/*.searchButton:not([disabled]):focus {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem var(--black),
    0.125rem 0.125rem 1rem var(--black);
}*/
.searchButton:not([disabled]):hover {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem green,
    0.125rem 0.125rem 1rem rgb(1, 151, 1);
}
</style>
