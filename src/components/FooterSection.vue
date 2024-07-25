<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="center">
    <div class="firstFooterElement center">
      <RouterLink to="/">
        <img src="/onlineShopLogo.png" alt="ElectroHut Logo" />
      </RouterLink>
      <div class="footerLinks">
        <h3>Link one</h3>
        <h3>Link two</h3>
        <h3>Link three</h3>
      </div>
      <div class="footerAppsIconDesktop">
        <img src="/footerSectionIcons/facebookIcon.svg" alt="Facebook Icon" />
        <img src="/footerSectionIcons/instagramIcon.svg" alt="Instagram Icon" />
        <img src="/footerSectionIcons/twitterIcon.svg" alt="Twitter Icon" />
        <img src="/footerSectionIcons/linkedInIcon.svg" alt="LinkedIn Icon" />
        <img src="/footerSectionIcons/youtubeIcon.svg" alt="Youtube Icon" />
      </div>
    </div>
    <div class="footerAppsIconMobile">
      <img src="/footerSectionIcons/facebookIcon.svg" alt="Facebook Icon" />
      <img src="/footerSectionIcons/instagramIcon.svg" alt="Instagram Icon" />
      <img src="/footerSectionIcons/twitterIcon.svg" alt="Twitter Icon" />
      <img src="/footerSectionIcons/linkedInIcon.svg" alt="LinkedIn Icon" />
      <img src="/footerSectionIcons/youtubeIcon.svg" alt="Youtube Icon" />
    </div>
    <div class="secondFooterElement center">
      <h4>
        © 2024 Electrohut All rights reserved | design
        <a href="https://github.com/ssmf" rel="noreferrer" target="_blank">ssmf</a>
      </h4>
      <h4 class="linkUnderline">Privacy Policy</h4>
      <h4 class="linkUnderline">Terms of Service</h4>
      <h4 class="linkUnderline">Cookies Settings</h4>
    </div>
  </footer>
</template>
<style scoped>
footer {
  width: 100vw;
  height: 25vh;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--whiteSecondary);
}
.firstFooterElement {
  width: 90%;
  height: 50px;
  justify-content: space-around;
}
.footerLinks {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.footerAppsIconDesktop {
  display: flex;
  gap: 25px;
}
.footerAppsIconMobile {
  display: none;
  height: fit-content;
  padding: 10px;
  gap: 25px;
}
@media (max-width: 600px) {
  footer {
    height: 35vh;
  }
  .footerAppsIconDesktop {
    display: none;
  }
  .footerAppsIconMobile {
    display: flex;
  }
}
.secondFooterElement {
  width: 90%;
  height: fit-content;
  flex-wrap: wrap;
  text-align: center;
  border-top: 1px solid black;
  gap: 30px;
  padding-top: 25px;
}
.linkUnderline {
  text-decoration: underline;
}
</style>
