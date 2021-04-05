<template>
    <div>
        <h1>
            Good Morning {{ username }}!<br>
            What would you like to do today?
        </h1>

        <button class ="logout" v-on:click="logout()" >Logout</button>
        <dashboard-buttons></dashboard-buttons>
        <subfooter></subfooter>
        
    </div>
    
</template>

<script>
import firebase from "../../../../firebase";
import DashboardButtons from "./DashboardButtons.vue"
import Subfooter from "./Subfooter.vue"

export default {
    name: 'AfterLogin',
    data (){
        return{
            username : 'USER1234',
        }
    },
    components:{
        'dashboard-buttons' : DashboardButtons,
        'subfooter' : Subfooter
    },
    methods: {
        logout: function () {
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.replace('/');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode + ":" + errorMessage);
            });
        },
    }
}
</script>

<style>
    h1{
        font-family: Lustria;
        text-align: center;
        margin: 20px;
        line-height: 1.5;
    }
    .logout{
        background-color: white;
        font-size: 30px; 
        margin-left: 80%;
    }
</style>