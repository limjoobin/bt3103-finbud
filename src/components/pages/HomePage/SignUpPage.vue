<template>
  <div id="main">
    <h1><img alt="Vue logo" src="../../../assets/logo.png" height="70px" /></h1>
    <h1>Welcome to FinBud!</h1>
    <h2 v-show="notLogin">You need to log in to access the {{page}} page!</h2>
    <h3 style="text-align:center;padding-bottom:1%">The only personal finance buddy you need</h3>

    <div   class="register">
      <h3 style="text-align:center;padding-bottom:5%;padding-top:5%">Create your FinBud account</h3>
      <form id="reg-form">
        <div v-show="showing === 'register' " >
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Fullname"
              v-model="name"/>
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              v-model="email"/>
          </div>
          <div>
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              v-model="password"/>
          </div>
          <div>
            <label for="password-again">Password Again:</label>
            <input
              type="password"
              id="password-again"
              placeholder="Re-enter Password"
              v-model="passwordcheck"/>
          </div>

        </div>

        <div v-show="showing === 'login' ">
          <h1>login</h1>
        </div>
        <br />
        <div>
          <div class='signUpBtn' v-on:click='register'>Sign up</div>
          <div class='signUpBtn' v-on:click="toggle('login')">I have an account</div>
        </div>
      </form>
    </div>

    
  </div>
</template>

<script>
import firebase from "../../../../firebase.js";

export default {
  props:['notLogin','page'],
  data:function() {
    return {
      showing:'register',
      name: "darren",
      email: "darren1@gmail.com",
      password: "123456",
      passwordcheck: "123456",
    };
  },
  methods: {
    toggle:function(page){
      this.showing = page
    },
    register:function() {
      console.log(this.email + ":" + this.password)
      console.log("user created")
      var validCred = true;
      if (
        (this.name == "",
        this.email == "",
        this.password == "",
        this.passwordcheck == "")) {
        alert("Please Fill All Required Field");
        validCred = false;
      } else if (this.password != this.passwordcheck) {
        alert("Sign up failed due to mismatch in passwords");
        validCred = false;
      } else if (this.password.length < 6) {
        alert("Sign up failed, password should be at least 6 characters");
        validCred = false;
      }
      if (validCred) {
        //Creates User
        console.log("user created");
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((userCred) => {console.log(userCred.user.uid);
                                                                                                      var uid = userCred.user.uid;
                                                                                                      // this.updateFirestore(uid);
                                                                                                       firebase.firestore().doc(`user/${uid}`).set({
                                                                                                                                      username: this.name,
                                                                                                                                      email: this.email,
                                                                                                                                    }).then(()=> 
                                                                                                                                    this.$router.push({ name: "homepage" })
                                                                                                                                    ).catch((error)=> {console.log(error.code+":"+error.message)});
                                                                                                      // alert("Successful Sign up, please proceed to login");
                                                                                                      
                                                                                                      }).catch((error) => {
                                                                                                      var errorCode = error.code;
                                                                                                      var errorMessage = error.message;
                                                                                                      alert(errorCode + ":" + errorMessage);
                                                                                                      console.log(errorCode + ":" + errorMessage);
                                                                                                    });
                                                                                                  
      }

    },
    updateFirestore:function(uid) {
      console.log("HIII")
      firebase.firestore().collection(`user`).add({
                username: this.name,
                email: this.email,
              }).then(()=> 
              this.$router.push({ name: "homepage" })
              ).catch((error)=> {console.log(error.code+":"+error.message)});
      console.log(uid, this.name,this.email);
            

    }
  },
};
</script>

<style scoped>
#main {
  background-color: #a9d6ff;
  height: 85vh;
}
.register {
  background-color: #a9d6ff;
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



.signUpBtn {
  float: right;
  /* width: 160px; */
  width:30%;
  height: 20px;
  padding:1%;
  margin-right:5%;
  border-radius: 10px;
  background-color: #3d5afa;
  color: white;
  font-size: 15px;
  text-align: center;
}

.signUpBtn:hover {
  background-color: lightskyblue;
  color: white;
  border-color: lightskyblue;
}
</style>