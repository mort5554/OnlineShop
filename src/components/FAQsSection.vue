<script setup>
import { ref } from 'vue'
const isOpened1 = ref(false)
const isOpened2 = ref(false)
const isOpened3 = ref(false)
const isOpened4 = ref(false)
const isOpened5 = ref(false)
</script>
<template>
  <div class="FAQsSectionContainer center">
    <div class="FAQsSectionLeft">
      <h1>FAQs</h1>
      <h2>
        Have questions? We've got answers. Browse our FAQs for <br />
        quick solutions to common inquiries about shipping, returns, <br />
        products, payments, and more. If you need additional <br />
        assistance, our customer support team is ready to help.
      </h2>
      <button class="buttonContact">Contact</button>
    </div>
    <div class="FAQsSectionRight">
      <div class="FAQsElement center">
        <h2 class="FAQsElementHeader">What is your return policy?</h2>
        <div class="FAQsElementOpen" @click="isOpened1 = !isOpened1" :class="{ rotate: isOpened1 }">
          +
        </div>
      </div>
      <div class="FAQsElement center">
        <h2 class="FAQsElementHeader">What payment methods do you accept?</h2>
        <div class="FAQsElementOpen" @click="isOpened2 = !isOpened2" :class="{ rotate: isOpened2 }">
          +
        </div>
      </div>
      <div class="FAQsElement center">
        <h2 class="FAQsElementHeader">Do you offer warranties on your products?</h2>
        <div class="FAQsElementOpen" @click="isOpened3 = !isOpened3" :class="{ rotate: isOpened3 }">
          +
        </div>
      </div>
      <div class="FAQsElement center">
        <h2 class="FAQsElementHeader">How long does it take to ship my order?</h2>
        <div class="FAQsElementOpen" @click="isOpened4 = !isOpened4" :class="{ rotate: isOpened4 }">
          +
        </div>
      </div>
      <div class="FAQsElement center">
        <h2 class="FAQsElementHeader">Do you have a physical store I can visit?</h2>
        <div class="FAQsElementOpen" @click="isOpened5 = !isOpened5" :class="{ rotate: isOpened5 }">
          +
        </div>
        <h4></h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
.FAQsSectionContainer {
  width: 100vw;
  height: 1152px;
  padding-top: 100px;
}
/* Letf Side*/
.FAQsSectionLeft {
  width: 45%;
  align-self: flex-start;
}
.FAQsSectionLeft h1 {
  font-size: 70px;
  color: black;
}
.FAQsSectionLeft h2 {
  margin-top: 10px;
  font-size: 20px;
}
.buttonContact {
  width: 122px;
  height: 55px;
  font-size: large;
  border-radius: 8px;
  margin-top: 40px;
  border: 1px solid var(--black);
  background-color: var(--white);
  cursor: pointer;
}
/* Right Side*/
.FAQsSectionRight {
  width: 45%;
  align-self: flex-start;
}
.FAQsElement {
  width: 100%;
  height: fit-content;
  align-self: space-around;
  border: 1px solid black;
  margin: 3%;
}
.FAQsElementHeader {
  width: 95%;
}
.FAQsElementOpen {
  display: flex;
  justify-content: flex-end;
  font-size: 55px;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
}
.rotate {
  transform: rotate(-45deg);
}
.FAQsElementDescription {
  display: flex;
  flex-direction: column;
}
</style>
