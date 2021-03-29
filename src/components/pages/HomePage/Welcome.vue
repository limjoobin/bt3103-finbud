<template>
<div id="welcome">
    <img alt="Vue logo" src="../../../assets/logo.png" height="70px">
    <h1>Welcome to FinBud!</h1>
    <h3>The only personal finance buddy you need</h3>
    <div class="flex-container">
        <div class="one">
        <img class="cropped" src="../../../assets/mainpic.jpg" height="360px">
        </div>

        <div class="two">
            <div id="login"><login-section></login-section></div>
        </div>


    </div>
</div>
    
</template>


<script>
import LoginSection from './LoginSection.vue'


export default {
    components: {
        LoginSection
    }

    }
    

</script>

<style scoped>
h3,h1 {
    font-family: Lustria;

}

.flex-container {
    display: flex;
    height: 400px;
}

.one {
    width:70%;
    float: left;

}  

.flex-child:first-child {
    margin-right: 10px;

}

#welcome {
    background-color: #A9D6FF;
}

#login {
    margin: auto;
}
</style>