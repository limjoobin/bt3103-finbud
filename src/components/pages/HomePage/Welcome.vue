<template>
  <div id="welcome">
    <h1><img alt="Vue logo" src="../../../assets/logo.png" height="90px" /></h1>
    <h1>
      Welcome to FinBud!<br />
      The only personal finance buddy you need
    </h1>
    <div class="flex-container">
      <div class="one">
        <img class="cropped" src="../../../assets/mainpic.jpg" />
      </div>

      <div class="two">
        <div id="login"><login-section></login-section></div>
      </div>
    </div>
  </div>
</template>


<script>
import LoginSection from "./LoginSection.vue";

export default {
  components: {
    LoginSection,
  },
};
</script>

<style scoped>
h3,
h1 {
  font-family: Lustria;
}

.flex-container {
  display: flex;
  padding: 3%;
  height: 440px;
  margin: auto;
}

.cropped {
  width: 90%;
  min-width: 80%;
  height: 95%;
  min-height: 80%;
}
.one {
  padding-left: 8%;
  height: 100%;
  min-height: 100%;
}

.two {
  padding-left: 3%;
  padding: auto;
  width: 30%;
  min-width: 30%;
  height: 90%;
  min-height: 80%;
}

#welcome {
  background-color: #a9d6ff;
}

#login {
  margin: auto;
}
</style>