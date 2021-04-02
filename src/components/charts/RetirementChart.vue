<template>
    <div>
        <h1>Retirement Chart</h1>
        <chart :loading='isloading' :barData='assetGrowthData' :min='min' :max='max' ></chart>
        
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
    props:['assetGrowthData','loading'],
    data:function(){
        return{
            min:40,
            max:70,
            isloading: true
        }
    },methods:{
        sendData:function(){
            this.$emit('barData',this.assetGrowthData)
            this.isloading = this.loading
            this.$emit('loading', this.isloading)
        }
    },created(){
        this.sendData()
    },
    watch:{
        assetGrowthData:function(){
            this.sendData()
        },
        loading:function(){
            this.isloading = this.loading
            this.$emit('loading', this.isloading)
        }
    }
}
</script>