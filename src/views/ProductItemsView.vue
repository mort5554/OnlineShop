<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <NavBar />
  <div class="productItemsContainer center">
    <div class="productHeader center">
      <h1>{{ route.name }}</h1>
      <p>Browse our bestselling {{ route.name }} at the best prices on the market</p>
    </div>
    <div class="productsContainer">
      <div class="filtersContainer">
        <div class="wrapper center">
          <h2>Filters</h2>
          <h3>Clear all</h3>
        </div>
        <h4>Showing 0 of 100</h4>
        <div class="productTypeContainer">
          <h2>Type</h2>
          <h3>Work Laptops/Notebooks</h3>
          <h3>Gaming Laptops</h3>
          <h3>Ultrabooks</h3>
          <h3>2-in-1 laptops</h3>
        </div>
        <div class="priceContainer">
          <div class="wrapper center">
            <h2>Price</h2>
            <h3>Clear</h3>
          </div>
          <div class="wrapper center">
            <input type="text" class="priceFrom" placeholder="From" />
            <h3>-</h3>
            <input type="text" class="priceTo" placeholder="To" />
          </div>
        </div>
        <div class="switchContainer center">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          <span class="label">On Sale</span>
        </div>
        <!--First filter-->
        <div class="productFiltersContainer">
          <div class="productFilter">
            <div class="wrapper center">
              <h2>Featured Brands</h2>
              <h3>Clear</h3>
            </div>
            <div class="checkboxContainer">
              <label><input type="checkbox" />HP</label>
              <label><input type="checkbox" /> Apple</label>
              <label><input type="checkbox" /> Lenovo</label>
              <label><input type="checkbox" /> Acer</label>
              <label><input type="checkbox" /> Dell</label>
            </div>
          </div>
        </div>
        <!--Second filter-->
        <div class="productFiltersContainer">
          <div class="productFilter">
            <div class="wrapper center">
              <h2>Processor</h2>
              <h3>Clear</h3>
            </div>
            <div class="checkboxContainer">
              <label><input type="checkbox" />Intel</label>
              <label><input type="checkbox" /> AMD</label>
              <label><input type="checkbox" /> Qualcomm</label>
              <label><input type="checkbox" /> Apple</label>
            </div>
          </div>
        </div>
        <!--Third filter-->
        <div class="productFiltersContainer">
          <div class="productFilter">
            <div class="wrapper center">
              <h2>Graphic Card</h2>
              <h3>Clear</h3>
            </div>
            <div class="checkboxContainer">
              <label><input type="checkbox" />NVIDIA</label>
              <label><input type="checkbox" /> AMD</label>
              <label><input type="checkbox" /> ASUS</label>
              <label><input type="checkbox" /> MSI</label>
              <label><input type="checkbox" /> Gigabyte</label>
            </div>
          </div>
        </div>
        <!--Fourth filter-->
        <div class="productFiltersContainer">
          <div class="productFilter">
            <div class="wrapper center">
              <h2>RAM</h2>
              <h3>Clear</h3>
            </div>
            <div class="checkboxContainer">
              <label><input type="checkbox" />2 GB</label>
              <label><input type="checkbox" /> 4 GB</label>
              <label><input type="checkbox" /> 8 GB</label>
              <label><input type="checkbox" /> 16 GB</label>
              <label><input type="checkbox" /> 32 GB</label>
            </div>
          </div>
        </div>
        <!--Fifth filter-->
        <div class="productFiltersContainer">
          <div class="productFilter">
            <div class="wrapper center">
              <h2>Hard Drive Size</h2>
              <h3>Clear</h3>
            </div>
            <div class="checkboxContainer">
              <label><input type="checkbox" />250 GB</label>
              <label><input type="checkbox" /> 500 GB</label>
              <label><input type="checkbox" /> 1 TB</label>
              <label><input type="checkbox" /> 2 TB</label>
              <label><input type="checkbox" /> 3 TB+</label>
            </div>
          </div>
        </div>
        <!--Sixth filter-->
        <div class="productFiltersContainer">
          <div class="productFilter">
            <div class="wrapper center">
              <h2>Operating System</h2>
              <h3>Clear</h3>
            </div>
            <div class="checkboxContainer">
              <label><input type="checkbox" />Windows 11</label>
              <label><input type="checkbox" /> Windows 10</label>
              <label><input type="checkbox" /> MAC OS</label>
              <label><input type="checkbox" /> Chrome OS</label>
              <label><input type="checkbox" /> 3 TB+</label>
            </div>
          </div>
        </div>
      </div>
      <div class="productsCardContainer">
        <div class="activeFiltersContainer">
          <div class="activeFilters">
            <div class="filter center">
              <h3>HP</h3>
              <h3>+</h3>
            </div>
          </div>
          <div class="sortByContainer"></div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>
<style scoped>
.productItemsContainer {
  width: 100vw;
  height: fit-content;
  background-color: var(--white);
  flex-direction: column;
  justify-content: flex-start;
  padding: 5%;
}
/* Left Side*/
/* Header */
.productHeader {
  width: 95%;
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.productHeader h1 {
  font-size: 48px;
  font-weight: bold;
  color: var(--black);
}
.productHeader p {
  font-size: 18px;
}
/* Filters*/
.filtersContainer {
  width: 20%;
  gap: 20px;
  display: flex;
  flex-direction: column;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
.wrapper h3 {
  cursor: pointer;
}
/* Type*/
.wrapper h2,
.productTypeContainer h2 {
  font-weight: 600;
  color: var(--black);
}
/* Price */
.priceContainer {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  padding-top: 20px;
  padding-bottom: 20px;
}
.wrapper input {
  width: 45%;
  height: 30px;
  border: 1px solid var(--black);
  padding: 5px;
  color: #666666;
}
/* On Sale Switch*/
.switchContainer {
  height: 60px;
  border-bottom: 1px solid var(--black);
  padding-bottom: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}
.switchContainer span {
  font-weight: bold;
  font-size: 18px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}
.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: var(--greenPrimary);
}
input:checked + .slider:before {
  transform: translateX(20px);
}
.label {
  margin-left: 10px;
  vertical-align: middle;
  font-family: Arial, sans-serif;
  color: var(--black);
}
/* Product Filters*/
.productFiltersContainer {
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.productFilter {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--black);
  gap: 5px;
}
.checkboxContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
}
.checkboxContainer input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  display: inline-block;
}

.checkboxContainer input[type='checkbox']:checked {
  background-color: #000;
}

.checkboxContainer input[type='checkbox']:checked::after {
  width: 6px;
  height: 15px;
  content: '';
  position: absolute;
  left: 5px;
  bottom: 3px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(40deg);
}

/* Right Side*/
.productsContainer {
  width: 95%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  gap: 5%;
}
.activeFiltersContainer {
  width: 90%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.activeFilters {
  display: flex;

  width: fit-content;
}
.filter {
  width: 65px;
  height: 35px;
  justify-content: space-evenly;
  background-color: #eeeeee;
}
</style>
