<template>
    <div>
        <retirement-chart :assetGrowthData='assetGrowthData' :loading='loading'></retirement-chart>
        <Retirement-income-chart :incomeData='incomeInfo'></Retirement-income-chart>
    </div>    
</template>

<script>
import RetirementChart from '../../charts/RetirementChart.vue'
import firebase from '../../../../firebase'
import RetirementIncomeChart from '../../charts/RetirementIncomeChart.vue'

export default {
  components: { RetirementChart, RetirementIncomeChart},
    name:"Report",
    data:function(){
        return{
            database: firebase.firestore(),
            loading:true,
            assetGrowthData:{},
            incomeInfo:[]
        }
    },
    methods:{
      fetchData:function(){
          this.incomeInfo = [[10,20],[10,100,30]]
          this.sendIncomeInfo()
        this.database.collection('user/user1/financialPathway').get().then(snapshot =>{
            if(!snapshot.empty){
                snapshot.docs.forEach(doc =>{
                        var data = doc.data()
                        this.assetGrowthData['currentAge'] = data.currentAge
                        this.assetGrowthData['projectedCashInBank'] = data.projectedCashInBank
                        this.assetGrowthData['projectedInvestmentExpected'] = data.projectedInvestmentExpected
                        this.assetGrowthData['projectedExpenses'] = data.projectedExpenses
                })
            }
        }).then(()=>{this.sendAssetInfo()})
      },sendIncomeInfo:function(){
          this.$emit('incomeData',this.incomeInfo)
      },sendAssetInfo:function(){
          console.log("SENDING")
          this.$emit('assetGrowthData',this.assetGrowthData)
          this.loading = false
          this.$emit('loading',this.loading)
      }
    },    
    created(){
        this.fetchData();
    }
}
</script>
