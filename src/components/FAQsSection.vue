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
    <!-- Left Side -->
    <div class="FAQsSectionLeft">
      <h1>FAQs</h1>
      <h2>
        Have questions? We've got answers. Browse our FAQs for <br />
        quick solutions to common inquiries about shipping, returns, <br />
        products, payments, and more. If you need additional <br />
        assistance, our customer support team is ready to help.
      </h2>
      <button class="buttonContact">Contact</button>
      <div class="FAQsSectionRightMobile">
        <!--First Element-->
        <div class="FAQsElement">
          <div class="FAQsElementTop">
            <h2 class="FAQsElementHeader">What is your return policy?</h2>
            <div
              class="FAQsElementOpenButton"
              @click="isOpened1 = !isOpened1"
              :class="{ rotate: isOpened1 }"
            >
              +
            </div>
          </div>
          <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened1 }">
            We want you to be completely satisfied with your Electrohut purchase. If you're not,
            simply return your item(s) within 30 days of receipt in new, unused condition with the
            original packaging for a full refund or exchange. Please visit the ‘Orders’ section on
            your account page, to initiate the process and for detailed instructions.
          </div>
        </div>
        <!--Second Element-->
        <div class="FAQsElement">
          <div class="FAQsElementTop">
            <h2 class="FAQsElementHeader">What payment methods do you accept?</h2>
            <div
              class="FAQsElementOpenButton"
              @click="isOpened2 = !isOpened2"
              :class="{ rotate: isOpened2 }"
            >
              +
            </div>
          </div>
          <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened2 }">
            We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal,
            Apple Pay, Google Pay, and Shop Pay for your convenience.
          </div>
        </div>
        <!--Third Element-->
        <div class="FAQsElement">
          <div class="FAQsElementTop">
            <h2 class="FAQsElementHeader">Do you offer warranties on your products?</h2>
            <div
              class="FAQsElementOpenButton"
              @click="isOpened3 = !isOpened3"
              :class="{ rotate: isOpened3 }"
            >
              +
            </div>
          </div>
          <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened3 }">
            Yes! We stand behind the quality of our products. Most items come with a manufacturer's
            warranty. The specific warranty period and terms can vary depending on the product, so
            please refer to the product description or contact our customer support for details.
          </div>
        </div>
        <!--Fourth Element-->
        <div class="FAQsElement">
          <div class="FAQsElementTop">
            <h2 class="FAQsElementHeader">How long does it take to ship my order?</h2>
            <div
              class="FAQsElementOpenButton"
              @click="isOpened4 = !isOpened4"
              :class="{ rotate: isOpened4 }"
            >
              +
            </div>
          </div>
          <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened4 }">
            We strive to get your tech goodies to you as quickly as possible! Shipping times vary
            depending on your location and the shipping method chosen at checkout. Generally, you
            can expect your order to arrive within 3-7 business days. You'll receive a shipping
            confirmation email with tracking information as soon as your order is on its way.
          </div>
        </div>
        <!--Fifth Element-->
        <div class="FAQsElement">
          <div class="FAQsElementTop">
            <h2 class="FAQsElementHeader">Do you have a physical store I can visit?</h2>
            <div
              class="FAQsElementOpenButton"
              @click="isOpened5 = !isOpened5"
              :class="{ rotate: isOpened5 }"
            >
              +
            </div>
          </div>
          <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened5 }">
            Electrohut is an online-only retailer, so we don't have any physical stores at this
            time. However, we offer a wide range of products, competitive prices, and the
            convenience of shopping from anywhere at any time.
          </div>
        </div>
      </div>
    </div>
    <!--Right Side Desktop-->

    <div class="FAQsSectionRightDesktop">
      <!--First Element-->
      <div class="FAQsElement">
        <div class="FAQsElementTop">
          <h2 class="FAQsElementHeader">What is your return policy?</h2>
          <div
            class="FAQsElementOpenButton"
            @click="isOpened1 = !isOpened1"
            :class="{ rotate: isOpened1 }"
          >
            +
          </div>
        </div>
        <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened1 }">
          We want you to be completely satisfied with your Electrohut purchase. If you're not,
          simply return your item(s) within 30 days of receipt in new, unused condition with the
          original packaging for a full refund or exchange. Please visit the ‘Orders’ section on
          your account page, to initiate the process and for detailed instructions.
        </div>
      </div>
      <!--Second Element-->
      <div class="FAQsElement">
        <div class="FAQsElementTop">
          <h2 class="FAQsElementHeader">What payment methods do you accept?</h2>
          <div
            class="FAQsElementOpenButton"
            @click="isOpened2 = !isOpened2"
            :class="{ rotate: isOpened2 }"
          >
            +
          </div>
        </div>
        <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened2 }">
          We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple
          Pay, Google Pay, and Shop Pay for your convenience.
        </div>
      </div>
      <!--Third Element-->
      <div class="FAQsElement">
        <div class="FAQsElementTop">
          <h2 class="FAQsElementHeader">Do you offer warranties on your products?</h2>
          <div
            class="FAQsElementOpenButton"
            @click="isOpened3 = !isOpened3"
            :class="{ rotate: isOpened3 }"
          >
            +
          </div>
        </div>
        <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened3 }">
          Yes! We stand behind the quality of our products. Most items come with a manufacturer's
          warranty. The specific warranty period and terms can vary depending on the product, so
          please refer to the product description or contact our customer support for details.
        </div>
      </div>
      <!--Fourth Element-->
      <div class="FAQsElement">
        <div class="FAQsElementTop">
          <h2 class="FAQsElementHeader">How long does it take to ship my order?</h2>
          <div
            class="FAQsElementOpenButton"
            @click="isOpened4 = !isOpened4"
            :class="{ rotate: isOpened4 }"
          >
            +
          </div>
        </div>
        <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened4 }">
          We strive to get your tech goodies to you as quickly as possible! Shipping times vary
          depending on your location and the shipping method chosen at checkout. Generally, you can
          expect your order to arrive within 3-7 business days. You'll receive a shipping
          confirmation email with tracking information as soon as your order is on its way.
        </div>
      </div>
      <!--Fifth Element-->
      <div class="FAQsElement">
        <div class="FAQsElementTop">
          <h2 class="FAQsElementHeader">Do you have a physical store I can visit?</h2>
          <div
            class="FAQsElementOpenButton"
            @click="isOpened5 = !isOpened5"
            :class="{ rotate: isOpened5 }"
          >
            +
          </div>
        </div>
        <div class="FAQsElementClosed" :class="{ FAQsElementOpened: isOpened5 }">
          Electrohut is an online-only retailer, so we don't have any physical stores at this time.
          However, we offer a wide range of products, competitive prices, and the convenience of
          shopping from anywhere at any time.
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.FAQsSectionContainer {
  width: 100vw;
  height: fit-content;
  padding: 100px 30px;
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
@media (max-width: 827px) {
  .FAQsSectionLeft {
    width: 40%;
  }
  .FAQsSectionLeft h1 {
    font-size: 50px;
  }
  .FAQsSectionLeft h2 {
    font-size: 16px;
  }
}
/* Right Side Desktop*/
.FAQsSectionRightDesktop {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45%;
  align-self: flex-start;
}
.FAQsElement {
  width: fit-content;
  border: 1px solid black;
  padding: 25px;
}
.FAQsElementHeader {
  width: 90%;
  height: fit-content;
  font-weight: 600;
  padding-bottom: 8px;
}
.FAQsElementTop {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.FAQsElementClosed {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  margin-top: 5px;
  font-size: small;
}
@media (max-width: 428px) {
  .FAQsElementOpened {
    margin-top: 15%;
  }
  .FAQsElementHeader {
    height: 100px;
    display: flex;
    align-items: center;
  }
}
@media (max-width: 689px) {
  .FAQsElementHeader {
    font-size: 15px;
    font-weight: 900;
  }
}
@media (max-width: 827px) {
  .FAQsSectionRightDesktop {
    width: 55%;
    margin-left: 15px;
  }
  .FAQsElementOpened {
    font-size: 12px;
  }
}
.FAQsElementOpened {
  max-height: 370px;
}
.FAQsElementOpenButton {
  display: flex;
  justify-content: flex-end;
  font-size: 55px;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s;
}
.rotate {
  transform: rotate(-45deg);
}
.FAQsElementDescription {
  display: flex;
  flex-direction: column;
}
/* Right Side Mobile */
.FAQsSectionRightMobile {
  display: none;
  flex-direction: column;
}
@media (max-width: 444px) {
  .FAQsSectionLeft {
    width: 90%;
  }
  .FAQsSectionRightMobile {
    display: flex;
    margin-top: 40px;
    gap: 20px;
  }
  .FAQsSectionRightDesktop {
    display: none;
  }
}
</style>
