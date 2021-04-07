<template>
    <div id = 'savings-chart'>
        <chart v-bind:timestep = "this.timestep" v-bind:amount="this.amount"></chart>
    </div>
</template>

<script>
import Chart from "./SavingsWithdrawalChart.js"
export default {
    props: ["timestep","amount"],
    components:{
        'chart' : Chart
    }
};

</script>

<style>
#savings-chart{
    background-color:#B9DEFF;
    padding: 1% 15% 10% 15%;
}
</style>
