<template>
    <div class = "register">
        <h1>Welcome to FinBud!</h1>
        <h3 style="text-align:center;padding-bottom:1%">Forgot Password</h3>
        <form @submit.prevent='forgotPassword'>
            <div class ="reg-form">
                <br>
                <label for="exampleInputEmail" style ="margin-left: 16%;">Email Address: </label>
                <input text="text" class = "form-control" v-model="user.email">
            </div>
            <br>
            <button type="submit" class="btns" style ="margin-left: 70%;">Reset Password</button>
        </form>
        <br><br><br>
    </div>
</template>

<script>
import firebase from "../../../firebase.js";

export default {
    data(){
        return {
            user:{
                email: '',
            }
        }
    },
    methods: {
        forgotPassword(){
            firebase.auth()
            .sendPasswordResetEmail(this.user.email)
            .then(() => {
                alert('Check your Email')
                this.user = {
                    email:'',
                }
            }).catch((error) => {
                alert(error.message);
            })
        }
    }
}
</script>

<style scoped>
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

.btns{
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  padding: none;
  border: none;
  background: none;
}
</style>
