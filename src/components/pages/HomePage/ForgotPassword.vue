<template>
    <div>
        <div class = "register">
            <!-- <h1>Reset your password here!</h1> -->
            <h3 style="text-align:center;padding-bottom:1%">Reset your password here!</h3>
            <form @submit.prevent='forgotPassword'>
                <div class ="reg-form">
                    <br>
                    <label for="exampleInputEmail" style ="margin-left: 15%; margin-right: 5%">Email Address: </label>
                    <input text="text" style="width:50%" v-model="user.email">
                </div>
                <br>
                <button type="submit" class="btns" >Reset Password</button>
            </form>
            <br><br><br>
        </div>
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
  background-color: whitesmoke;
  width: 500px;
  margin: 10% auto;
  padding: 2%;
  border: 7px solid green-border;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #444;
  background-color: back-color;
  box-shadow: 0 0 20px 0 #000000;
}

.register *{
    background-color: whitesmoke;
}

.btns{
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  padding: 2%;
  border: none;
  background: none;
  background-color: #3d5afa;
  margin-top: 10%;
  margin-left: 70%;
  color: whitesmoke;
  border-radius: 25px;
}

.btns:hover {
  background-color: lightskyblue;
  color: whitesmoke;
  border-color:lightskyblue;
}
</style>
