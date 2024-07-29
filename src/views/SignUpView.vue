<script setup>
import FooterSection from '@/components/FooterSection.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="signInContainer center">
    <div class="signIn">
      <h2>Sign Up</h2>
      <p>Sign up and start building your dream setup today</p>
      <form>
        <label for="name">Name*</label>
        <input type="text" id="name" />
        <label for="email">Email*</label>
        <input type="email" id="email" required />
        <label for="password">Password*</label>
        <input type="password" id="password" required />

        <button type="submit" class="logInButton">Sign in</button>
        <button type="button" class="googleLogInButton">
          <span class="center"><img src="/signInUp/googleIcon.svg" />Sign in with Google</span>
        </button>
      </form>
      <p class="alreadyAccount">
        Already have an account? <RouterLink class="signUp" to="SignIn">Sign In</RouterLink>
      </p>
    </div>
    <h4 class="center">© 2022 Relume</h4>
  </div>
  <FooterSection />
</template>
<style scoped>
.signInContainer {
  width: 100vw;
  height: 85vh;
  background-color: var(--white);
  flex-direction: column;
  justify-content: space-evenly;
}
.signIn {
  width: 400px;
  background-color: var(--white);
  padding: 30px;
  border: 1px solid var(--black);
  text-align: center;
}
h2 {
  margin-bottom: 10px;
  font-size: xx-large;
  font-weight: 600;
  color: var(--black);
}
form {
  display: flex;
  flex-direction: column;
}
label {
  text-align: left;
  margin-bottom: 5px;
}
input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--black);
}
.forgotPassword {
  color: var(--black);
}
.logInButton {
  background-color: #28a745;
  color: var(--white);
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}
.logInButton:hover {
  box-shadow: #28a745 1px 2px 2px 1px;
}
.googleLogInButton {
  background-color: var(--white);
  color: var(--black);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.googleLogInButton span {
  margin-left: 5px;
}
.googleLogInButton img {
  padding-right: 15px;
}
.signUp {
  color: var(--black);
  margin-top: 2px;
}
.alreadyAccount {
  padding-top: 5%;
}
h4 {
  font-size: small;
}
</style>
