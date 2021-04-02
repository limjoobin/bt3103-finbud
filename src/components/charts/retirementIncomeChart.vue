<template>
    <div>
        <div class='titles'>
            <h1 class='title'>Before CPF Life Payout</h1>
            <h1 class='title'>After CPF Life Payout</h1>   
        </div>
        <div class='subtitles'>
            <p class='subtitle'>Total Income: ${{this.totalIncomeBeforeCPF}} </p>
            <p class='subtitle'>Total Income: ${{this.totalIncomeAfterCPF}} </p>
        </div>
        <div class='subtitles'>
            <p class='subtitle'>Ideal Income: ${{this.idealIncomeAtRetirement}} </p>
            <p class='subtitle'>Ideal Income: ${{this.idealIncomeAt65}} </p>
        </div>
        <div class='subtitles'>
            <p class='subtitle'>Projected Expenses: ${{this.projectedExpensesAtRetirement}} </p>
            <p class='subtitle'>Projected Expenses: ${{this.projectedExpensesAt65}} </p>
        </div>
        <div class='charts'>
            <chart class='chart' :dataInfo='beforeCPF' :loading='loading'></chart>
            <chart class='chart' :dataInfo="afterCPF" :loading='loading'></chart>
        </div>
    </div>
</template>


<script>
import Chart from './RetirementIncomeChart.js'

export default {
    components:{Chart},
    props:['incomeData','loading'],
    data:function(){
        return{
            beforeCPF:[],
            afterCPF:[],
            totalIncomeBeforeCPF:0,
            totalIncomeAfterCPF:0,
            idealIncomeAtRetirement:0,
            idealIncomeAt65:0,
            projectedExpensesAtRetirement:0,
            projectedExpensesAt65:0

        }
    },methods:{
        fetchData:function(){
            if(!this.loading){
                this.beforeCPF = this.incomeData[0]
                this.afterCPF = this.incomeData[1]
                this.idealIncomeAtRetirement = this.incomeData[2][0]
                this.idealIncomeAt65 = this.incomeData[2][1]
                this.totalIncomeBeforeCPF = this.incomeData[3][0]
                this.totalIncomeAfterCPF = this.incomeData[3][1]
                this.projectedExpensesAtRetirement = this.incomeData[4][0]
                this.projectedExpensesAt65 = this.incomeData[4][1]

            }
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
        },loading:function(){
            this.fetchData()
            this.updateBeforeCPF()
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
.charts, .titles, .subtitles{
    display: flex;
    justify-content: center;
    text-align: center;
}

.chart{
    margin-left:2%;
    margin-right:2%;
}

.title, .subtitle{
    display: block;
    width: 100%;
}



</style>