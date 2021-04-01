<template>
    <div>
        <h1>Retirement Chart</h1>
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
        }
    }
}
</script>