<template>
  <div>
    <div class="login">
      <img alt="Vue logo" src="../../../assets/logo.png" class="center"/>
      <h2 style="text-align:center;background-color:whitesmoke">FinBud</h2>
      <form style="text-align:center;background-color:whitesmoke">
        <input type="text" placeholder="Username" v-model="email_field" />
        <input type="password" placeholder="Password" v-model="password" />
      </form>
      <br />
      <button v-on:click="login()">Login</button>
      <br /><br />
      <button @click="$router.push('/signup')">Get Started</button>
    </div>
  </div>
</template>


<script>
import firebase from "../../../../firebase";

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
      firebase.auth()
              .signInWithEmailAndPassword(userEmail, userPass)
              .then(()=>{
                this.$router.push({path: 'home'})
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode + ":" + errorMessage);
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
  background-color:whitesmoke;
  border-radius: 30px;
  padding: 40px;
  width: 60%;
  height: 100%;
}

.login h2{
  width: 100%;
}

.center {
  background-color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: 20%;
}

input {
  width: 75%;
  padding: 3% 3%;
  margin: 3% 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  margin-left: 25%;
  width: 50%;
  height: 20%;
  border-radius: 25px;
  padding:2%;
  background-color: #1e40ff;
  color: white;
  font-size: 15px;
  text-align: center;
}


button:hover {
  background-color: lightskyblue;
  color: white;
  border-color:lightskyblue;
}
</style>