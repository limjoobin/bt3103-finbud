<template>
    <div>
        <div>
            <h1 style="display:block">Before CPF</h1>
            <chart :dataInfo='beforeCPF'></chart>
        </div>
        <div>
            <h1 style="display:block">With CPF</h1>   
            <chart :dataInfo="afterCPF"></chart>
        </div>
    </div>
</template>


<script>
import Chart from './RetirementIncomeChart.js'

export default {
    components:{Chart},
    props:['incomeData'],
    data:function(){
        return{
            beforeCPF:[],
            afterCPF:[],
        }
    },methods:{
        fetchData:function(){
            this.beforeCPF = this.incomeData[0]
            this.afterCPF = this.incomeData[1]
        },
        updateBeforeCPF:function(){
            this.$emit('dataInfo',this.beforeCPF)
        },updateAfterCPF:function(){
            this.$emit('dataInfo',this.afterCPF)
        }
    },watch:{
        beforeCPF:function(){
            this.updateBeforeCPF()
        },
        afterCPF:function(){
            this.updateAfterCPF()
        }
    },mounted(){
        this.fetchData()
        this.updateBeforeCPF()
        this.updateAfterCPF()
    }
}

</script>

<style scoped>
*{
    display: flex;
    justify-content: center;
}

</style>