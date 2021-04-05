<template>
    <div>
        <h1>Asset After Retirement Projection</h1>
        <!-- <chart :loading='loading' :barData='assetGrowthData' :min='min' :max='max' ></chart> -->
        <chart :loading='loading' :barData='assetGrowthData' ></chart>
        
        <!-- <label>Start Age</label>
        <input type='number' v-model="min">
        <label>End Age</label>
        <input type='number' v-model="max">
        <button v-on:click="clicked()">Update</button> -->
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
            max:100,
            isloading: true
        }
    },methods:{
        sendData:function(){
            this.min = this.assetGrowthData.idealRetirementAge
            this.$emit('barData',this.assetGrowthData)
            this.$emit('loading', this.loading)
        }
    },created(){
        this.sendData()
    },
    watch:{
        assetGrowthData:function(){
            this.sendData()
        },
        loading:function(){
            this.$emit('loading', this.loading)
        }
    }
}
</script>