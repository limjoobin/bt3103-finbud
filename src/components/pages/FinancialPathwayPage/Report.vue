<template>
    <div>
        <retirement-chart></retirement-chart>
        <retirement-income-chart></retirement-income-chart>
    </div>    
</template>


<script>
import RetirementChart from '../../charts/RetirementChart.vue'
import firebase from '../../../../firebase'
import RetirementIncomeChart from '../../charts/retirementIncomeChart.vue'

export default {
  components: { RetirementChart, RetirementIncomeChart },
    name:"Report",
    data:function(){
        return{
            database: firebase.firestore(),
            dataset:{}
        }
    },
    methods:{
      
    },    
    created(){
    }
}
</script>
