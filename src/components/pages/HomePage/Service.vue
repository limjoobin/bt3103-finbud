<template>
<div id="service">
    <h1 style="padding-top:10px;background-color:white">Our Services</h1>
    <!--
    <div class="container">
        <div id="boxes">
            <span>Find out your ideal Budget</span>
        </div>

        <div id="boxes">
            <span>Calculate Your Investment Growth</span>
        </div>

        <div id="boxes">
            <span>Find out how long can your investment last you for</span>
        </div>

        <div id="boxes">
            <span>Map out your pathway to Financial Freedom</span>
        </div>
    </div>
    -->
    <h1 style="background-color:white;text-align:center"> You might be interested in</h1>
    <div class ="budCon2">
            <button class ="navBut" @click="$router.push('/investment_growth')">Calculate Your Investment Growth</button>
            <button class ="navBut" @click="$router.push('/savings_withdrawal')">Find out how long can your investment last you for</button>
            <button class ="navBut" @click="nav">Map out your pathway to Financial Freedom</button>
    </div>

</div>
    
</template>

<script>
import firebase from '../../../../firebase'

export default {
    methods:{
        nav:function(){
            if(!firebase.auth().currentUser){
                this.$router.push({name:'signup',params:{loginStatus:false,page:'Financial Pathway'}})
            }
        }
    }
}
</script>

<style scoped>
.container {
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
}

#service {
    height:25%;
    background-color: white;
    width: 100vw;
}
#boxes {
    background-color:white;
    border-radius: 25px;
    padding: 10px;
    width: 160px;
    height: 160px;
  line-height: 160px;
  text-align: center;
}

span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.budCon2{
    width: 100%;
    background-color:white;
    text-align: center;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
}

.navBut{
    text-align: center;
    font-size: 30px;
    padding: 5px;
    align-self: center;
    flex-basis:  auto;
    margin-left: 85px;
    height: 230px;
    width: 200px;
    border-radius: 12px;
    color: #0E4070;
}

</style>