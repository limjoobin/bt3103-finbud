<template>
    <div>
        <h1>Retirement Chart</h1>
        <!-- <chart @min="clicked()" @max='clicked()' :min="min" :max="max" ></chart> -->
        <!-- <chart :barData='barData' :min='min' :max='max' :dataset='dataset'></chart> -->
        <chart :min='min' :max='max' ></chart>
        <label>Start Age</label>
        <input type='number' v-model="min">
        <label>End Age</label>
        <input type='number' v-model="max">
        <button v-on:click="clicked()">Update</button>
    </div>
</template>

<script>
import Chart from "./RetirementChart.js";

export default {
    components:{Chart},
    props:['dataset'],
    data:function(){
        return{
            min:40,
            max:70,
            barData:{
                currentAge:0,
                projectedCashInBank: [],
                projectedInvestmentExpected: [],
                projectedExpenses:[]
            },
        }
    },watch:{
        barData:function(){
            return this.barData
        }
        // ,dataset: {
        //     handler: function (val, oldVal) {
        //         console.log('watch 1', 'newval: ', val, '   oldVal:', oldVal)
        //         this.barData.projectedCashInBank = val.projectedCashInBank
        //         this.barData.projectedInvestmentExpected = val.projectedInvestmentExpected
        //         this.barData.projectedExpenses = val.projectedExpenses
        //         this.barData.currentAge = val.currentAge
        //         console.log(this.barData)
        //     },
        //     deep: true
        // }
    }, methods:{
       
    }, created(){
        // console.log(this.dataset)
        // var data = this.dataset
        // console.log(data)
        // console.log(data.currentAge)
        // this.barData.projectedCashInBank = this.dataset.projectedCashInBank
        // this.barData.projectedInvestmentExpected = this.dataset.projectedInvestmentExpected
        // this.barData.projectedExpenses = this.dataset.projectedExpenses
        // this.barData.currentAge = this.dataset.currentAge
    }
}
</script>