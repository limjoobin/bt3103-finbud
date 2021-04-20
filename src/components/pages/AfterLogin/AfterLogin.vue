<template>
    <div>
        <h1 v-if ="date < 12">
            Good Morning {{ this.user }}!<br>
            What would you like to do today?
        </h1>
        <h1 v-else-if="date >= 12 && date <= 17">
            Good Afternoon {{ this.user }}!<br>
            What would you like to do today?
        </h1>
        <h1 v-else>
            Good Evening {{ this.user }}!<br>
            What would you like to do today?
        </h1>
        <button class ="logout" v-on:click="logout()" >Logout</button>
        
        <dashboard-buttons></dashboard-buttons>
        <subfooter></subfooter>
    </div>
    
</template>

<script>
import firebase from "../../../firebase";
import DashboardButtons from "./DashboardButtons.vue"
import Subfooter from "./Subfooter.vue"
var database = firebase.firestore();

export default {
    name: 'AfterLogin',
    data (){
        return{
            user : null,
            date: new Date().getHours()
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
                this.$store.commit('logout')
                this.$router.replace('/');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode + ":" + errorMessage);
            });
        },
    },
    created: function(){
        document.title="FinBud - Home"
        var user = firebase.auth().currentUser
        var useremail = user.email;
        database.collection('user').get().then((querySnapShot)=>{
            querySnapShot.forEach(doc=>{
                var item = doc.data();
                for (const i in item) {
                    if (item[i] == useremail) {
                        this.user = item['username'];
                    }
                }
            })      
        });
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
        text-decoration: none;
        opacity: .9;
        border-radius: 8px;
        font-size: 25px; 
        margin-left: 80%; 
        background-color: white;  
        padding: 0.5%;
        transition-duration: 0.4s;
    }

    .logout:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 30px 0 rgba(0,0,0,0.19);
    }

</style>