<template>
  <div id="service">
    <h1 style="padding-top: 2%; background-color: white">Our Services</h1>
    <h1 style="background-color: white; text-align: center">
      You might be interested in
    </h1>
    <div class="budCon2">
      <button class="navBut" @click="$router.push('/budget_planning')">
        Calculate Your Monthly Budget
      </button>
      <button class="navBut" @click="$router.push('/investment_growth')">
        Calculate Your Investment Growth
      </button>
      <button class="navBut" @click="$router.push('/savings_withdrawal')">
        Find out how long can your investment last you for
      </button>
      <button class="navBut" @click="nav">
        Map out your pathway to Financial Freedom
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "../../../firebase";

export default {
  methods: {
    nav: function () {
      var notLogin = firebase.auth().currentUser ? false : true;
      if (notLogin) {
        this.$router.push({
          name: "signup",
          params: { notLogin: notLogin, page: "Financial Pathway" },
        });
      } else {
        this.$router.push("/financial_pathway");
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
}

#service {
  height: 25%;
  background-color: white;
}
#boxes {
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  width: 160px;
  height: 160px;
  line-height: 160px;
  text-align: center;
}

span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.budCon2 {
  background-color: white;
  text-align: center;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}

.navBut {
  text-align: center;
  font-size: 30px;
  padding: 5px;
  align-self: center;
  flex-basis: auto;
  margin-left: 2%;
  height: 230px;
  width: 50%;
  border-radius: 12px;
  color: #0e4070;
  transition-duration: 0.4s;
}

.navBut:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>