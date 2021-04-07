<template> 
  <div>
    <savings-header></savings-header>
    <br><br><br><br>

        <calculator v-on:chart-data='onChartData'></calculator>
        <savings-chart v-bind:timestep="this.timesteps" v-bind:amount="this.amount"></savings-chart>
        <br>
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
import Header from './Header.vue'
import Calculator from './Calculator.vue'
import SavingsWithdrawlChart from '../../charts/SavingsWithdrawlChart.vue'
export default {
    name: 'SavingsWithdrawal',
    components:{
        'savings-header':Header,
        'calculator':Calculator,
        'savings-chart': SavingsWithdrawlChart
    },
    data (){
        return{
            timesteps:0,
            amount:[]
        }
    },
    methods:{
        onChartData:function(timesteps, amount){
            this.timesteps = timesteps;
            this.amount = amount;
        }
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