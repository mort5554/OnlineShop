<script setup></script>
<template>
  <div class="signInContainer center">
    <h1 class="signInHeader center">Sign In</h1>
    <div class="loginContainer center">
      <input type="text" class="input" placeholder="E-mail..." />
      <input type="text" class="input" placeholder="Password" />
      <p>No account? <span>Sign Up</span></p>
      <button class="buttonSignIn">Sign In</button>
    </div>
  </div>
</template>
<style scoped>
.signInContainer {
  width: 100vw;
  height: 800px;
  background-color: var(--white);
  flex-direction: column;
  justify-content: flex-start;
}
.signInHeader {
  width: 100%;
  height: 111px;
  color: var(--seaweed);
  font-family: HuangRegular;
  font-size: 50px;
  margin-top: 50px;
}
.loginContainer {
  height: 402px;
  width: 50%;
  background-color: var(--white);
  border: 0.5px solid var(--black);
  border-radius: 25px;
  margin-bottom: 60px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 22px;
}
.input {
  width: 80%;
  height: 82px;
  border-radius: 20px;
  border: 1.5px solid var(--black);
  background-color: #dee2de;
  padding: 2px;
  font-size: 26px;
  font-weight: 400;
  padding: 10px;
}
.loginContainer p {
  width: 80%;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.12px;
  color: #9ca59d;
  margin-top: 3px;
}
.loginContainer span {
  font-size: 16px;
  font-weight: 400;
  line-height: 23.12px;
  color: var(--darkgreen);
}
.buttonSignIn {
  width: 244px;
  height: 78px;
  border-radius: 15px;
  border: 0px;
  font-family: NotoSansRegular;
  font-size: 28px;
  font-weight: 800;
  color: white;
  background-color: var(--darkgreen);
}
</style>
