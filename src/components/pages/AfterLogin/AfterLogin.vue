<template>
    <div>
        <h1>
            Good Morning {{ username }}!<br>
            What would you like to do today?
           
        </h1>
        <button class ="logout" v-on:click="logout()" style = "background-color: white;font-size: 30px; margin-left: 80%;">Logout</button>
        <dashboard-buttons></dashboard-buttons>
        <div id = 'sub-footer'>
            <h1>Exclusive Financial Deals</h1>
            <button class='financial-deals'>Credit Card Promotion</button>
            <button class='financial-deals'>Comprehensive Insurance Coverage</button>
            <button class='financial-deals'>High Yield Investment Returns</button>
        </div>
    </div>
    
</template>

<script>
import firebase from "../../../../firebase";
import DashboardButtons from "./DashboardButtons.vue"

export default {
    name: 'AfterLogin',
    data (){
        return{
            username : 'USER1234',
        }
    },
    components:{
        'dashboard-buttons' : DashboardButtons,
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
   
    #sub-footer{
        background-color: white;
        width: 100%;
        margin-top: 20px;
        padding-bottom:20px;
        text-align: center;
    }
    #sub-footer h1{
        background-color: white;
        padding: 20px;
    }
    .financial-deals{
        background-color: white;
        background-image:url('https://cdn.pling.com/img/d/c/0/2/e4fff450a6306e045f5c26801ce31c3efaeb.jpg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        border:none;
        text-align:center;
        display: table-cell;
        width: 20%;
        min-width: 20%;
        padding: 10% 0 20 0;

        font-family: Lato;
        font-size: 20px;
    }

</style>