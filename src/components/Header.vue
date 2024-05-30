<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <header>
    <head>
      <div class="left bluredGreenCircle"></div>
      <div class="right bluredGreenCircle"></div>
      <h1>
        <span>MortShop</span>, Twoja Droga do Świata <br />
        Cyfrowej Rozrywki i Produktywności
      </h1>
      <h3>
        Odkryj naszą bogatą ofertę laptopów, komputerów <br />
        stacjonarnych, podzespołów i akcesoriów i skompletuj <br />
        swój wymarzony zestaw.
      </h3>
      <div class="wrap">
        <button class="button">Przeglądaj</button>
      </div>
    </head>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: center;
  height: 700px;
  overflow: none;
}
head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 90%;
}
.left {
  top: 57%;
  left: -16%;
}
.right {
  top: 25%;
  right: -14%;
}
.bluredGreenCircle {
  height: 40%;
  width: 30%;
  background-color: #35cd55;
  position: absolute;
  filter: blur(90px);
  border-radius: 50%;
}
head h1 {
  text-align: center;
  margin-top: 5%;
  font-size: 380%;
}
head span {
  color: #6fc682;
}
head h3 {
  text-align: center;
  margin-top: 3%;
  font-size: 200%;
}
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  min-width: 300px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: white;
  background: #35cd55;
  background: linear-gradient(90deg, #35cd55 0%, #70c983 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 10px 24px #3add5d;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

button::before {
  content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #35cd55;
  box-shadow: 0 0 60px #35cd55;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}

.button:hover,
.button:focus {
  color: white;
  transform: translateY(-6px);
}

button:hover::before,
button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid #39a851;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after,
button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
</style>
