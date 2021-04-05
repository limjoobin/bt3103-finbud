<template> 
  <div>
    <h1>Savings Withdrawal Page</h1>
    <br><br><br><br>
        <p style ="text-align: center; padding-top: 10px;font-size: 50px; color: #0E4070">You might be interested in...</p>
        <div class ="budCon2">
            <br><br>
            <br><br>
            <button class ="navBut" @click="$router.push('/budget_planning')">Find out your Ideal Budget for Investment</button>
            <button class ="navBut">Find out how long can your investment last you for</button>
            <button class ="navBut">Map out your pathway to Financial Freedom</button>
        </div>
  </div>
</template>

<script>

export default {
    name: 'SavingsWithdrawal',
    data (){
        return{}
    }

}
</script>


<style>

.budCon2{
    display: flex;
    justify-content: center;
    min-height: 200px;
    background-color: #A9D6FF;
    padding-bottom: 2%;

}

.navBut{
    background-color: #fff;
    text-align: center;
    padding:2%;
    width:20%;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 12px;
    color: #0E4070;
}

</style>