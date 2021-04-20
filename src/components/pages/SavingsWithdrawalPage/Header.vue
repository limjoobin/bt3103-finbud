<template>
  <header id='savings-header'>
    <img src="../../../assets/logo.png" @click="$router.push('/')" />
    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
  </header>
</template>

<script>
export default {
  name: "Budget Calculator",
  data() {
    return {
      title: "Savings Withdrawal Calculator",
      msg:
        "Use this calculator to figure out how much your investment can amount to",
    };
  },
};
</script>

<style>
#savings-header {
  background-color: #a9d6ff;
  content: "";
  display: table;
  width: 100%;
  margin: 0;
  padding: 0;
}

#savings-header img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 10%;
  height: 10%;
}

h1 {
  color: #0e4070;
  font-family: Lustria;
  text-align: center;
  font-weight: normal;
  font-size: 40px;
}

#savings-header p {
  font-size: 15px;
  text-align: center;
  font-family: Lato;
}
</style>
