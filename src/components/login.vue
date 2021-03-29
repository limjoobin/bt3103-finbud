<template>
  <div>
    <div class="login" id="login_div">
      <img alt="Vue logo" src="../assets/logo.png" height="40px" />
      <p>FinBud</p>
      <form>
        <input type="text" placeholder="Username" v-model="email_field" />
        <input type="password" placeholder="Password" v-model="password" />
      </form>
      <br />
      <button id="button1" v-on:click="login()">Login</button>
      <br /><br />
      <button id="button2">
        <router-link to="/login">Get Started</router-link>
      </button>
    </div>
    <div id="user_div" style="display: none">
      <h3>Welcome User</h3>
      <p>Welcome user, you are currently logged in</p>
      <button v-on:click="logout()">Log out</button>
    </div>
  </div>
</template>


<script>
import firebase from "../firebase";

export default {
  data() {
    return {
      email_field: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      var userEmail = this.email_field;
      var userPass = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPass)
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode + ":" + errorMessage);
        });
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          document.getElementById("user_div").style.display = "block";
          document.getElementById("login_div").style.display = "none";
        } else {
          // No user is signed in.
          document.getElementById("user_div").style.display = "none";
          document.getElementById("login_div").style.display = "block";
        }
      });
    },
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          document.getElementById("user_div").style.display = "none";
          document.getElementById("login_div").style.display = "block";
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode + ":" + errorMessage);
        });
    },
  },
};
</script>

<style scoped>
.login {
  background-color: white;
  border-radius: 25px;
  padding: 30px;
  width: 200px;
  height: 320px;
}

input {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

#button1 {
  width: 160px;
  height: 40px;
  border-radius: 10px;
  border: 10px solid #a9b6ff;
  background-color: #a9b6ff;
  color: white;
  font-size: 15px;
  text-align: center;
}

#button2 {
  width: 160px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #a9bdff;
  background-color: white;
  color: #a9b6ff;
  font-size: 15px;
  text-align: center;
}
</style>