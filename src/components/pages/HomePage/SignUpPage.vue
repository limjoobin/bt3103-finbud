<template>
  <div id="main">
    <img alt="Vue logo" src="../../../assets/logo.png" height="70px" />
    <h1>Welcome to FinBud!</h1>
    <h3>The only personal finance buddy you need</h3>
    <div class="register">
      <h3>Create your FinBud account</h3>
      <form id="reg-form">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter Fullname" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Enter Email" v-model="email"/>
        </div>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="Enter Your Username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Enter Password" v-model="password"/>
        </div>
        <div>
          <label for="password-again">Password Again:</label>
          <input type="password" id="password-again" placeholder="Re-enter Password" />
        </div>
        <br />
        <div>
          <label></label>
          <button type="submit" id="signUp" v-on:click="register()">Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "../../../../firebase.js"
export default {
  data() {
    return {
    email:"",
    password:"",
    }
  },
methods: {
  register() {
    alert(this.email + ":" + this.password);
    firebase.auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              alert("Successfully registered! Please login.");
              this.$router.push("/");
            })
            .catch(error => {
              console.log(error.message);
            });
  },
},
};
</script>

<style scoped>
#main {
  background-color: #a9d6ff;
  height: 600px;
}
.register {
  background-color: white;
  width: 500px;
  margin: 10px auto;
  padding: 10px;
  border: 7px solid green-border;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #444;
  background-color: back-color;
  box-shadow: 0 0 20px 0 #000000;
  height: 350px;
}

label {
  display: inline-block;
  width: 25%;
  text-align: right;
  margin: 10px;
}

input[type="text"],
input[type="password"] {
  width: 55%;
  padding: 5px;
  font-size: 0.9em;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.07);
}
.button {
  width: 160px;
  height: 40px;
  border-radius: 10px;
  border: 10px solid #a9b6ff;
  background-color: #a9b6ff;
  color: white;
  font-size: 15px;
  text-align: center;
}
#signUp {
    width: 160px;
  height: 40px;
  border-radius: 10px;
  border: 10px solid #a9b6ff;
  background-color: #a9b6ff;
  color: white;
  font-size: 15px;
  text-align: center;
}
</style>