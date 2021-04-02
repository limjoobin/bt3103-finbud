<template>
    <div>
        <retirement-line-chart :assetGrowthData='assetGrowthData' :loading='loading'></retirement-line-chart>
        <retirement-chart :assetGrowthData='assetGrowthData' :loading='loading'></retirement-chart>
        <Retirement-income-chart :incomeData='incomeInfo' :loading='loading'></Retirement-income-chart>
    </div>    
</template>

<script>
import RetirementChart from '../../charts/RetirementChart.vue'
import firebase from '../../../../firebase'
import RetirementIncomeChart from '../../charts/retirementIncomeChart.vue'
import RetirementLineChart from '../../charts/RetirementLineChart.vue'

export default {
  components: { RetirementChart, RetirementIncomeChart, RetirementLineChart},
    name:"Report",
    data:function(){
        return{
            database: firebase.firestore(),
            loading:true,
            assetGrowthData:{},
            details:{},
            incomeInfo:[]
        }
    },
    methods:{
      fetchData:function(){
        this.sendIncomeInfo()
        this.database.collection('user/user1/financialPathway').get().then(snapshot =>{
            if(!snapshot.empty){
                snapshot.docs.forEach(doc =>{
                        var data = doc.data()
                        var milestones = this.getDataPointsForMilestone(data.milestoneGoals,data.date,data.currentAge)
                        this.assetGrowthData['currentAge'] = data.currentAge
                        this.assetGrowthData['projectedCashInBank'] = data.projectedCashInBank
                        this.assetGrowthData['projectedInvestmentExpected'] = data.projectedInvestmentExpected
                        this.assetGrowthData['projectedExpenses'] = data.projectedExpenses
                        this.assetGrowthData['idealRetirementAge'] = data.idealRetirementAge
                        this.assetGrowthData['milestones'] = milestones[0]
                        this.assetGrowthData['milestonesLabel'] = milestones[1]
                        this.details['idealRetirementAge'] = data.idealRetirementAge
                        this.details['cpfPayout'] = data.cpfPayout
                        this.details['idealIncome'] =  data.idealRetirementIncome
                        this.details['expectedInflation'] = data.expectedInflation
                        this.details['idealRetirementIncomeAt65'] = data.idealRetirementIncomeAt65
                        this.details['milestones'] = milestones[0]
                })
            }
        }).then(()=>{
            this.loading = false
            this.calculateIncome();
            this.sendAssetInfo()
            this.sendIncomeInfo();
            })
      },sendIncomeInfo:function(){
          this.$emit('incomeData',this.incomeInfo)
          this.$emit('loading',this.loading)
      },sendAssetInfo:function(){
          console.log("SENDING")
          this.$emit('assetGrowthData',this.assetGrowthData)
          this.$emit('loading',this.loading)
      }, calculateIncome:function(){
          var yearsToRetirement = this.details.idealRetirementAge - this.assetGrowthData.currentAge
          var inv = this.assetGrowthData['projectedInvestmentExpected'][yearsToRetirement]
          var div = Math.round((inv * 0.03)/12)
          var Withdrawal = Math.round((inv * 0.04)/12)
          this.incomeInfo.push([div,Withdrawal])

          var yearsto65 = 65 - this.assetGrowthData.currentAge
          var invAfter65 = this.assetGrowthData['projectedInvestmentExpected'][yearsto65]
          var divAfter65 = Math.round((invAfter65 * 0.03)/12)
          var withdrawalAfter65 = Math.round((invAfter65 * 0.02)/12)

          this.incomeInfo.push([divAfter65,withdrawalAfter65,Math.round(this.details.cpfPayout)])

          this.incomeInfo.push([Math.round(this.details.idealIncome),Math.round(this.details.idealRetirementIncomeAt65)])
          this.incomeInfo.push([div + Withdrawal, divAfter65 +withdrawalAfter65 +Math.round(this.details.cpfPayout)])

          var expAtRetirement = Math.round(this.assetGrowthData.projectedExpenses[yearsToRetirement]/12)
          var expAt65 = Math.round(this.assetGrowthData.projectedExpenses[yearsto65]/12)
          console.log(expAtRetirement,expAt65)
          this.incomeInfo.push([expAtRetirement,expAt65])
      }, getDataPointsForMilestone:function(milestone, date,currentAge){
        //   {x:3,y:10}
          var milestones =[]
          var milestonesLabel = []
          for(let i = 0; i < milestone.length ; i++){
              var amt = milestone[i].amount
              var yr =  new Date(milestone[i].date).getFullYear() - new Date(date).getFullYear()
              console.log(new Date(milestone[i].date).getFullYear() , new Date(date).getFullYear())
              milestones.push({x:yr+currentAge,y:amt})
              if(milestone[i].freq !== 'once'){
                  milestonesLabel.push(milestone[i].freq +" " + milestone[i].name)
              } else{
                  milestonesLabel.push(milestone[i].name)

              }
          }
          console.log(milestones)
          return [milestones, milestonesLabel]
      }
    },    
    created(){
        this.fetchData();
    }
}
</script>

<style scoped>
*{
    padding:5%;
}
</style>
