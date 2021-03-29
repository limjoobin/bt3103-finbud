<template>
<div id="service">
    <h1 style="padding-top:10px">Our Services</h1>
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

    <div class ="budCon2">
            <p style ="text-align: center; padding-top: 10px;font-size: 50px; color: #0E4070">You might be interested in...</p>
            <button class ="navBut" @click="$router.push('/investment_growth')">Calculate Your Investment Growth</button>
            <button class ="navBut">Find out how long can your investment last you for</button>
            <button class ="navBut">Map out your pathway to Financial Freedom</button>
    </div>

</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
}

#service {
    height:320px;
}
#boxes {
    background-color: #A9D6FF;
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
    background-color: #A9D6FF;
    text-align: center;
    padding-bottom: 50px;
}

.navBut{
    text-align: center;
    font-size: 30px;
    padding: 5px;
    margin-left: 85px;
    height: 230px;
    width: 200px;
    border-radius: 12px;
    color: #0E4070;
}

</style>