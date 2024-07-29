<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <header class="center">
    <div class="head center">
      <div class="left bluredGreenCircle"></div>
      <div class="right bluredGreenCircle"></div>
      <h1>
        The future of technology<br />
        starts here
      </h1>
      <h3>
        Discover our wide range of laptops, desktop computers, components and accessories and
        <br />
        complete your dream set
      </h3>
      <button class="searchButton">Shop Now</button>
    </div>
  </header>
</template>
<style scoped>
header {
  overflow: hidden;
  height: fit-content;
  background-color: var(--white);
  padding-bottom: 7%;
}
.head {
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;
  height: 100%;
  position: relative;
}
.head h1 {
  text-align: center;
  margin-top: 3%;
  font-size: 60px;
  font-weight: 600;
  padding: 20px;
  width: 70%;
  position: relative;
  color: var(--black);
  z-index: 1;
}
.head h3 {
  text-align: center;
  font-size: 20px;
  z-index: 1;
}
@media (max-width: 928px) {
  .head h1 {
    font-size: 50px;
    width: 100%;
    padding: 20px;
  }
  .head h3 {
    font-size: 25px;
  }
  .searchButton {
    font-size: 30px;
    height: 70px;
    width: 250px;
  }
}
@media (max-width: 588px) {
  .head h3 {
    font-size: 20px;
  }
}
.searchButton {
  display: inline-block;
  font-size: medium;
  font-weight: 600;
  margin-top: 2%;
  height: 50px;
  width: 130px;
  background: linear-gradient(to bottom right, var(--greenSecondary), var(--greenPrimary));
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
  z-index: 1;
}
.searchButton:not([disabled]):hover {
  box-shadow:
    0 0 0.25rem var(--black),
    -0.125rem -0.125rem 1rem var(--greenPrimary),
    0.125rem 0.125rem 1rem var(--greenSecondary);
}
.left {
  top: 10%;
  left: -10%;
}
.right {
  top: 3%;
  right: -14%;
}
.bluredGreenCircle {
  height: 90%;
  width: 60%;
  background-color: var(--greenPrimary);
  position: absolute;
  filter: blur(170px);
  border-radius: 100%;
  z-index: 0;
}
@media (max-width: 900px) {
  .bluredGreenCircle {
    height: 60%;
    width: 60%;
    filter: blur(120px);
  }
  .left {
    top: 25%;
  }
}
</style>
