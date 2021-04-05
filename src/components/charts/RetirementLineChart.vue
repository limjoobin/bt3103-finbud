<template>
    <div>
        <h1>Asset before Retirement Projection</h1>
        <chart :assetGrowthData='assetGrowthData' :loading='loading'></chart>
    </div>
</template>

<script>
import Chart from './RetirementLineChart'

export default {
    components:{Chart},
    props:['assetGrowthData','loading'],
    methods:{
        sendData:function(){
            this.$emit('assetGrowthData',this.assetGrowthData)
            this.$emit('loading',this.loading)
        }
    },
    created(){
        this.sendData()
    },watch:{
        assetGrowthData:function(){
            this.sendData()
        }, loading:function(){
            this.sendData()
        }
    }
}
</script>


<style scoped>


</style>